import React from "react";
import Image from "next/image";

const OrdersCard = ({ seller, pendingOrders, DoneOrders }) => {
  return (
    <div className="w-[18%] min-h-[140px] flex flex-col gap-3 p-4 rounded-3xl h-[18%] border border-green-600 bg-blue-100 shadow-md">
      {/* Header */}
      <div className="flex items-center  gap-2">
        <Image
          className="border rounded-md"
          src="/icons/orders2.svg"
          height={35}
          width={35}
          alt="Sales"
        />

        <div className=" flex gap-2 w-full justify-between">
          <h1 className="text-xl font-medium text-black">Orders</h1>
          <span className="text-2xl font-semibold text-green-900">
            {seller.Orders.length}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1">
        {/* Total Products */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Pending Orders:</span>
          <span className="text-lg font-semibold text-green-900">
            {pendingOrders.length}
          </span>
        </div>

        {/* Products Sold */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Deliered Orders:</span>
          <span className="text-lg font-semibold text-green-900">{DoneOrders.length}</span>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
