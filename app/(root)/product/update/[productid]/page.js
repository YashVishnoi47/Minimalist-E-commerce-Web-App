import ProductForm from "@/components/ProductsComponents/ProductForm";
import { getProductByID } from "@/lib/actions/Product.action";
import React from "react";

const page = async ({ params }) => {
  const { productid } = params;
  const productId = productid
  const product = await getProductByID(productId);

  if (!product) return <div>Loading...</div>;
  return (
    <div className="w-[20%] h-full justify-center items-center">
      <ProductForm product={product} type="update" />
    </div>
  );
};

export default page;
