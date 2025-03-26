import React from "react";
import ProductSold from "../SellerCards/ProductSoldCard";
import SalesCard from "../SellerCards/SalesCard";
import OrdersCard from "../SellerCards/OrdersCard";
import DailySalesGraph from "../graphs/DailySalesGraph";
import CategorySalesGraph from "../graphs/CategorySalesGraph";

const OverView = ({
  allProducts,
  seller,
  SellerOrders,
  pendingOrders,
  DoneOrders,
}) => {
  return (
    <div className="w-full flex flex-col bg-gray-50 p-4 -full border-red-600">
      {/* Stats */}
      <div className="w-full h-[25%] flex gap-10 border-black">
        <ProductSold allProducts={allProducts} />
        <SalesCard />
        <OrdersCard
          DoneOrders={DoneOrders}
          pendingOrders={pendingOrders}
          SellerOrders={SellerOrders}
          seller={seller}
        />
      </div>

      {/* Separator */}
      <div className="w-full h-[1.5px] mt-5 mb-5 bg-black"></div>

      {/* Graphs */}
      <div className="w-full h-[70%]  flex justify-between items-center gap-4">
        <div className="w-full h-full">
          <h1 className="text-4xl mb-4 ml-2 font-bold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
            Daily Sales
          </h1>
          <DailySalesGraph />
        </div>

        <div className="w-full h-full">
          <h1 className="text-3xl mb-4 ml-2 font-bold bg-gradient-to-r from-green-600 to-blue-500 text-transparent bg-clip-text">
            Sales Breakdown
          </h1>
          <CategorySalesGraph />
        </div>
      </div>
    </div>
  );
};

export default OverView;
