"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useUser } from "@clerk/nextjs";
import Loader from "./UtilityComponents/Loader";

const UserInformation = dynamic(() =>
  import("./UserComponents/UserInformation")
);
const Seller = dynamic(() => import("./sellerComponents/SellerComponent"));

const DynamicProofilePagecomponent = ({seller, user, userId }) => {
  const { isSignedIn, isLoaded } = useUser();

  const [activeComponent, setactiveComponent] = useState("UserInformation");

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!isSignedIn) {
    return <div>You are not Allowed</div>;
  }

  return (
    <div className="w-full h-screen relative flex flex-col items-center gap-2 justify-start">
      {/* Top of the Profile Page */}
      <div className="top flex gap-2 items-center border-b-2 border-black p-1 h-[10%] px-2 w-full rounded-lg">
        {/* User Information Component Button */}
        <div
          onClick={() => setactiveComponent("UserInformation")}
          className={`btn-1 flex justify-center transition-all duration-200 ease-in-out
             items-center border-2 cursor-pointer rounded-xl h-[70%] w-[15%] ${
               activeComponent === "UserInformation"
                 ? "bg-black text-white"
                 : ""
             }`}
        >
          User Information
        </div>
        <div
          onClick={() => setactiveComponent("SellerProfile")}
          className={`btn-1 flex justify-center transition-all duration-200 ease-in-out
             items-center border-2 cursor-pointer rounded-xl h-[70%] w-[15%] ${
               activeComponent === "Seller"
                 ? "bg-black text-white"
                 : ""
             }`}
        >
          Seller
        </div>
        

        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          Orders
        </div>
        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          Wishlist
        </div>
      </div>

      {/* Bottom of the Profile Page */}
      <div className="bottom h-[90%]  border-black bg-white w-full rounded-lg">
        {activeComponent === "UserInformation" && (
          <UserInformation seller={seller} clerkId={userId} user={user} />
        )}
        {activeComponent === "SellerProfile" && <Seller seller={seller} user={user} />}
      </div>
    </div>
  );
};

export default DynamicProofilePagecomponent;
