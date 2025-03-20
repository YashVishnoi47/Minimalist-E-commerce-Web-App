import SellerForm from "@/components/sellerComponents/SellerForm";
import { getUserById } from "@/lib/actions/user.actions";
import React from "react";

const BecomeSeller = ({ params }) => {
  const { userId } = params;
  const user = getUserById(userId);
  return (
    <div>
      <SellerForm user={user} />
    </div>
  );
};

export default BecomeSeller;
