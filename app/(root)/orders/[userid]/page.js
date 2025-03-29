import { GetOrderByUserID } from "@/lib/actions/Order.action";
import React from "react";

const page = async ({ params }) => {
  const { userid } = params;
  const userId = userid;
  const orders = await GetOrderByUserID({ userId });
  console.log(orders);
  return (
    <div className="w-full h-screen flex flex-col">
      {orders.map((order) => (
        <div key={order._id} className="order-item">
          {/* Replace with actual order details */}
          <p>Order ID: {order._id}</p>
          <p>Order Amount: ₹{order.Price}</p>
          <p>Order Date: {order.OrderDate}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
