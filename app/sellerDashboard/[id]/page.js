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
  // Seller
  const SellerID = user.SellerID;
  const seller = await findSellerById(SellerID);

  // All Products
  const allProducts = await getProductBySellerID(seller);
  // Seller Orders
  const SellerOrders = await GetOrderBySellerID({ sellerId: SellerID });
  // Pending Orders
  const PendingCondition = { Status: "Pending" };
  const pendingOrders = await GetOrderOnConditions({
    conditions: PendingCondition,
  });
  // Done Orders
  const DoneCondition = { Status: "Done" };
  const DoneOrders = await GetOrderOnConditions({ conditions: DoneCondition });

  // Order on todays date.now()
  const dateCondition = {
    OrderDate: { $gte: new Date().setHours(0, 0, 0, 0) },
  };
  const DateOrders = await GetOrderOnConditions({ conditions: dateCondition });

  if (!seller) return <Loader />;

  return (
    <SellerDashboardComp
      DateOrders={DateOrders}
      DoneOrders={DoneOrders}
      pendingOrders={pendingOrders}
      SellerOrders={SellerOrders}
      allProducts={allProducts}
      seller={seller}
    />
  );
};

export default SellerDashboard;
