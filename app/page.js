import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      Check if my accout is logged in or not .
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
