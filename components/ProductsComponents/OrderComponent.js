"use client";
import React from "react";
import { Button } from "../ui/button";
import { PlaceOrder } from "@/lib/actions/Order.action";

const OrderComponent = ({ product, sellerId, user }) => {
  const userId = user._id;
  // product ID , Seller ID , User ID
  const HandlePlaceOrder = async () => {
    const newOrder = await PlaceOrder(product, sellerId, userId);
    if (newOrder) {
      alert("Order Placed Successfully!");
    }
  };
  return (
    <div>
      {user.SellerID === sellerId ? (
        <div>
          <span>Product Details: {product.productName}</span>
          <Button disabled onClick={HandlePlaceOrder}>
            Owner cannot buy its own product
          </Button>
        </div>
      ) : (
        <div>
          <span>Product Details: {product.productName}</span>
          <Button onClick={HandlePlaceOrder}>Order This Product</Button>
        </div>
      )}
    </div>
  );
};

export default OrderComponent;
