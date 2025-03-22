import Image from "next/image";
import React from "react";

const SalesCard = () => {
  return (
    <div className="w-[18%] h-[140px] flex flex-col gap-2 justify-start items-start p-4 rounded-3xl bg-purple-100 border-2 border-gray-300 shadow-sm">
      <div className="flex gap-4 w-full items-center">
        <Image src="/icons/revenue.svg" height={40} width={40} alt="Revenue" />
        <h1 className="text-xl font-medium">Sales</h1>
      </div>
      <div className="flex flex-col  gap-2 text-gray-700 text-base w-full">
        <div className="flex justify-between w-full">
          <p>Profit:</p>
          <span className="text-green-500 font-medium">₹15,000</span>
        </div>
        <div className="flex justify-between w-full">
          <p>Loss:</p>
          <span className="text-red-500 font-medium">₹5,000</span>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
