import { findSellerById } from "@/lib/actions/seller.action";
import { getUserById } from "@/lib/actions/user.actions";
import Loader from "@/components/UtilityComponents/Loader";
import React from "react";
import SellerDashboardComp from "@/components/sellerComponents/SellerDashboard";
import { getProductBySellerID } from "@/lib/actions/Product.action";

const SellerDashboard = async ({ params }) => {
  const { id } = params;
  const user = await getUserById(id);
  const SellerID = user.SellerID;
  const seller = await findSellerById(SellerID);

  const allProducts  = await getProductBySellerID(seller);

  if (!seller) return <Loader />;

  return (
    <SellerDashboardComp allProducts={allProducts}  seller={seller}/>
  );
};

export default SellerDashboard;
