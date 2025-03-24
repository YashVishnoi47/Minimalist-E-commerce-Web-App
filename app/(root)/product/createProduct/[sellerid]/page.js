import ProductForm from "@/components/ProductsComponents/ProductForm";
import { findSellerById } from "@/lib/actions/seller.action";
import React from "react";

const page = async ({ params }) => {
  const { sellerid } = params;
  const sellerId = sellerid;
  const seller = await findSellerById(sellerId);

  if (!seller) return <div>Loading...</div>;
  return (
    <div className="w-[20%] h-full justify-center items-center">
      <ProductForm seller={seller} type="create" />
    </div>
  );
};

export default page;
