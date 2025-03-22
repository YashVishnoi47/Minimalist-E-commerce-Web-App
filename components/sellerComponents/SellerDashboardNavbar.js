import React from "react";

const SellerDashboardNavbar = ({ seller }) => {
  return (
    <div className="w-full flex h-[10%]">
      <div className="w-1/2 px-2 flex justify-start items-center h-full">
        <h1 className="text-2xl font-bold">Seller Dashboard</h1>
      </div>

      <div className="w-1/2 px-4 flex justify-end items-center h-full">
        <h1 className="text-xl font-medium capitalize mr-2">Welcome!</h1>
        <span className="text-lg capitalize font-medium">{seller.firstName}</span>
      </div>
    </div>
  );
};

export default SellerDashboardNavbar;
