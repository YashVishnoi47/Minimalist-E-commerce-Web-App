import { findSellerById } from "@/lib/actions/seller.action";
import { getUserById } from "@/lib/actions/user.actions";
import Loader from "@/components/UtilityComponents/Loader";
import React from "react";
import SellerDashboardComp from "@/components/sellerComponents/SellerDashboard";
import { getProductBySellerID } from "@/lib/actions/Product.action";
import {
  GetOrderBySellerID,
  GetOrderOnConditions,
} from "@/lib/actions/Order.action";

const SellerDashboard = async ({ params }) => {
  const { id } = params;
  const user = await getUserById(id);
  const SellerID = user.SellerID;
  const seller = await findSellerById(SellerID);

  const allProducts = await getProductBySellerID(seller);
  const SellerOrders = await GetOrderBySellerID({ sellerId: SellerID });
  const PendingCondition = { Status: "Pending" };
  const pendingOrders = await GetOrderOnConditions({
    conditions: PendingCondition,
  });
  const DoneCondition = { Status: "Done" };
  const DoneOrders = await GetOrderOnConditions({ conditions: DoneCondition });

  if (!seller) return <Loader />;

  return (
    <SellerDashboardComp
      DoneOrders={DoneOrders}
      pendingOrders={pendingOrders}
      SellerOrders={SellerOrders}
      allProducts={allProducts}
      seller={seller}
    />
  );
};

export default SellerDashboard;
