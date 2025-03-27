import React from "react";
import SellerOrdersCard from "../SellerCards/SellerOrdersCard";

const Orders = ({SellerOrders}) => {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-12 justify-start items-start">
      <div className="w-full h-[15%] -2 border-black flex justify-start items-center gap-12">
        <h1 className="text-4xl font-semibold">All Products - </h1>
      </div>
      {/* Search */}
      <div className="w-[80%] h-[5%] flex items-center justify-between">
        <input
          type="text"
          placeholder="Search by name, category, etc..."
          className="border-2 border-black outline-none w-[40%] px-4 py-2 rounded-full"
        />
      </div>
      {/* Products */}
      <div className="w-full h-[80%] flex flex-col gap-4">
        {SellerOrders.length > 0 ? (
          SellerOrders.map((orders) => (
            <SellerOrdersCard  key={orders._id} orders={orders} />
          ))
        ) : (
          <div>No Products Found...</div>
        )}
      </div>

      {/* <ProductForm seller={seller} /> */}
    </div>
  );
};

export default Orders;
