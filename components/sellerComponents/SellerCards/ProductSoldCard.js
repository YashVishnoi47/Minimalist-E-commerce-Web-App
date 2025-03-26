import Image from "next/image";
import React from "react";

const ProductSold = ({ allProducts, DoneOrders }) => {
  return (
    <div className="w-[18%] min-h-[140px] flex flex-col gap-3 p-4 rounded-3xl h-[18%] border border-green-600 bg-green-100 shadow-md">
      {/* Header */}
      <div className="flex items-center  gap-2">
        <Image
          className="border rounded-md"
          src="/icons/sales.svg"
          height={35}
          width={35}
          alt="Sales"
        />
        <h1 className="text-xl font-medium text-black">Products</h1>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1">
        {/* Total Products */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Total Products:</span>
          <span className="text-lg font-semibold text-green-900">
            {allProducts.length}
          </span>
        </div>

        {/* Products Sold */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Products Sold:</span>
          <span className="text-lg font-semibold text-green-900">{DoneOrders.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSold;
