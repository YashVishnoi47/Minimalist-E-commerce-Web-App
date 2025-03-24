"use client";
import React, { act, useState } from "react";
import SellerDashboardNavbar from "./SellerDashboardNavbar";
import Image from "next/image";
import dynamic from "next/dynamic";
const OverView = dynamic(() => import("./SellerTabs/OverView"));
const Products = dynamic(() =>
  import("@/components/sellerComponents/SellerTabs/Products")
);
const Orders = dynamic(() =>
  import("@/components/sellerComponents/SellerTabs/Orders")
);

const SellerDashboardComp = ({ seller, allProducts }) => {
  const [activecomponent, setActivecomponent] = useState("OverView");
  return (
    <div className="w-full h-full border-r-2 flex  border-black">
      {/* Sidebar */}
      <div className="sideBar h-full w-[15%]">
        {/* SideBar Logo */}
        <div className="logo w-full flex justify-center items-center h-[10%]">
          <h1 className="text-4xl font-semibold">LOGO</h1>
        </div>
        {/* Sidebar Links */}
        <div className="links flex flex-col gap-4 p-2 mt-2 w-full h-[90%]">
          {/* Overview */}
          <div
            onClick={() => setActivecomponent("OverView")}
            className={`w-full cursor-pointer flex gap-2 rounded-2xl
           justify-start px-2 items-center transition-all duration-200 ease-in-out h-[8%] border-2 ${
             activecomponent === "OverView" && "shadow-2xl "
           }`}
          >
            <Image
              src={"/icons/overview.svg"}
              width={25}
              height={25}
              alt="OverView"
            />
            <h1 className=" font-semibold">Overview</h1>
          </div>

          {/* Products */}
          <div
            onClick={() => setActivecomponent("Products")}
            className={`w-full cursor-pointer flex gap-2 rounded-2xl
           justify-start px-2  transition-all duration-200 ease-in-out items-center h-[8%] border-2 ${
             activecomponent === "Products" && "shadow-2xl"
           }`}
          >
            <Image
              src={"/icons/products.svg"}
              width={25}
              height={25}
              alt="OverView"
            />
            <h1 className=" font-semibold">Products</h1>
          </div>

          {/* Orders */}
          <div
            onClick={() => setActivecomponent("Orders")}
            className={`w-full cursor-pointer flex gap-2 rounded-2xl
            justify-start px-2 items-center transition-all duration-200 ease-in-out h-[8%] border-2 ${
              activecomponent === "Orders" && "shadow-2xl"
            }`}
          >
            <Image
              src={"/icons/orders.svg"}
              width={25}
              height={25}
              alt="OverView"
            />
            <h1 className=" font-semibold">Orders</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col justify-start items-center h-full border-b">
        {/* Navbar */}
        <SellerDashboardNavbar seller={seller} />

        {activecomponent === "OverView" && (
          <OverView allProducts={allProducts} />
        )}
        {activecomponent === "Products" && (
          <Products seller={seller} allProducts={allProducts} />
        )}
        {activecomponent === "Orders" && <Orders />}

        {/* Load Other Components here */}
      </div>
    </div>
  );
};

export default SellerDashboardComp;
