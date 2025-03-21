import { findSellerById } from "@/lib/actions/seller.action";
import { getUserById } from "@/lib/actions/user.actions";
import Loader from "@/components/UtilityComponents/Loader";
import React from "react";
import DashboardSideBar from "@/components/sellerComponents/DashboardSideBar";
import Image from "next/image";
import SellerDashboardNavbar from "@/components/sellerComponents/SellerDashboardNavbar";

const SellerDashboard = async ({ params }) => {
  const { id } = params;
  const user = await getUserById(id);
  const SellerID = user.SellerID;
  const seller = await findSellerById(SellerID);

  if (!seller) return <Loader />;

  return (
    <div className="w-full h-full border-r-2 flex  border-black">
      {/* Sidebar */}
      <div className="sideBar border-2  border-black h-full w-[15%]">
        {/* SideBar Logo */}
        <div className="logo w-full flex justify-center items-center h-[10%] border-2">
          <h1 className="text-4xl font-semibold">LOGO</h1>
        </div>
        {/* Sidebar Links */}
        <div className="links flex flex-col gap-4 p-2 mt-2 w-full h-[90%]">
          {/* Overview */}
          <div
            className="w-full cursor-pointer flex gap-2 rounded-2xl
           justify-start px-2 items-center h-[8%] border-2"
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
            className="w-full cursor-pointer flex gap-2 rounded-2xl
           justify-start px-2 items-center h-[8%] border-2"
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
            className="w-full cursor-pointer flex gap-2 rounded-2xl
            justify-start px-2 items-center h-[8%] border-2"
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
      <div className="w-[85%] flex flex-col justify-start items-center h-full border-b">
        {/* Navbar */}
        {/* <div className="w-full flex h-full border-2">
          <div className="w-1/2 px-2 flex justify-start items-center h-full border-red">
            <h1 className="text-2xl font-bold">Seller Dashboard</h1>
          </div>

          <div className="w-1/2 px-4 flex justify-end items-center h-full">
            <h1 className="text-xl font-medium capitalize mr-2">Welcome!</h1>
            <span className="text-lg capitalize font-medium">
              {seller.firstName}
            </span>
          </div>
        </div> */}
        <SellerDashboardNavbar seller={seller}/>
        {/* Load Other Components here */}
      </div>
    </div>
  );
};

export default SellerDashboard;
