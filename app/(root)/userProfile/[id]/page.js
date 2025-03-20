import React from "react";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import DynamicProofilePagecomponent from "@/components/DynamicProofilePagecomponent";
import {
  findSellerById,
  findSellerIDByUser,
} from "@/lib/actions/seller.action";

const page = async ({ params }) => {
  const { id } = params;
  const user = await getUserById(id);
  const SellerId = user.SellerID;
  const { userId } = auth();
  const Seller = await findSellerById(SellerId);

  return (
    <div>
      <DynamicProofilePagecomponent
        seller={Seller}
        user={user}
        userId={userId}
      />
    </div>
  );
};

export default page;
