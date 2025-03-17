"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";

const UserInformation = dynamic(() => import("./UserInformation"));
const SellerProfile = dynamic(() => import("./sellerComponents/SellerProfile"));

const DynamicProofilePagecomponent = ({ DBuser, userId }) => {
  const Params = useParams();
  const { id } = Params;
  const { isSignedIn, user, isLoaded } = useUser()
  console.log(user);

  const [activeComponent, setactiveComponent] = useState("UserInformation");

  if(!isSignedIn){
    return <div>You are not Allowed</div>;
  }

  if(!isLoaded){
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen relative flex flex-col items-center gap-2 justify-start">
      {/* Top of the Profile Page */}
      <div className="top flex gap-2 items-center border-b-2 border-black p-1 h-[10%] px-2 w-full rounded-lg">
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
        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          Wishlist
        </div>
        <div
          onClick={() => setactiveComponent("SellerProfile")}
          className={`btn-1 flex justify-center transition-all duration-200 ease-in-out
             items-center border-2 cursor-pointer rounded-xl h-[70%] w-[15%] ${
               activeComponent === "SellerProfile" ? "bg-black text-white" : ""
             }`}
        >
          Seller
        </div>
      </div>

      {/* Bottom of the Profile Page */}
      <div className="bottom h-[90%]  border-black p-4 bg-white w-full rounded-lg">
        {activeComponent === "UserInformation" && (
          <UserInformation clerkId={userId} user={DBuser} />
        )}
        {activeComponent === "SellerProfile" && <SellerProfile />}
      </div>
    </div>
  );
};

export default DynamicProofilePagecomponent;
