"use client";
import React from "react";
import { Button } from "../ui/button";
import { PlaceOrder } from "@/lib/actions/Order.action";

const OrderComponent = ({ product, sellerId, userId }) => {
  // product ID , Seller ID , User ID
  const HandlePlaceOrder = async () => {
    const newOrder = await PlaceOrder(product, sellerId, userId);
    if (newOrder) {
      alert("Order Placed Successfully!");
    }
  };
  return (
    <div>
      Product Details: {product.productName}
      <Button onClick={HandlePlaceOrder}>Order This Product</Button>
    </div>
  );
};

export default OrderComponent;
