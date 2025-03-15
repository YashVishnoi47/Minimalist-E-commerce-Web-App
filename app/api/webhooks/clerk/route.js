import { Webhook } from "svix";
import { headers } from "next/headers";
import { clerkClient, WebhookEvent } from "@clerk/nextjs/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server";

export async function POST(req) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env"
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name } =
      evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      photo: image_url,
      firstName: first_name,
      lastName: last_name,
    };

    const newUser = await createUser(user);

    if (newUser) {
      await clerkClient.users.update(newUser.clerkId, {
        publicMetadata: {
          userId: newUser._id,
          IsMasterAdmin: newUser.IsMasterAdmin,
        },
      });
    }

    return NextResponse.json({ message: "OK", user: newUser });
  }

  if (eventType === "user.updated") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      evt.data;

    const user = {
      photo: image_url,
      firstName: first_name,
      lastName: last_name,
    };

    const updatedUser = await updateUser(user);

    return NextResponse.json({ message: "OK", user: updatedUser });
  }

  if(eventType === "user.deleted") {
    const { id } = evt.data;

    const user = {
      clerkId: id
    };

    const deletedUser = await deleteUser(user);

    return NextResponse.json({ message: "OK", user: deletedUser });
  }

  return new Response("Webhook received", { status: 200 });
}
