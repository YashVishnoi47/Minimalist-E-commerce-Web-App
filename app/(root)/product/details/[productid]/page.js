import OrderComponent from "@/components/ProductsComponents/OrderComponent";
import { Button } from "@/components/ui/button";
import Loader from "@/components/UtilityComponents/Loader";
import { getProductByID } from "@/lib/actions/Product.action";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { findSellerById } from "@/lib/actions/seller.action";

const page = async ({ params }) => {
  const { productid } = params;
  const productId = productid;
  const product = await getProductByID(productId);
  const sellerId = product.productSeller;
  const { sessionClaims } = auth();
  const userId = sessionClaims?.publicMetadata?.userId;

  if (!product)
    return (
      <div>
        <Loader />
      </div>
    );

  // Add a button to order the product
  return (
    <div>
      <OrderComponent
        userId={userId}
        sellerId={sellerId}
        product={product}
      />
    </div>
  );
};

export default page;
