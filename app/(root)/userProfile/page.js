"use client";
import React from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import UserInformation from "@/components/UserInformation";
const page = () => {
  const { openUserProfile } = useClerk();
  return (
    <div className="w-full h-screen flex flex-col items-center gap-2  justify-start">
      {/* Top of the Profile Page */}
      <div className="top flex gap-2 items-center border-2 border-black p-1 h-[10%] px-2 w-full rounded-lg">
        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          User Information
        </div>
        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          Address
        </div>
        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          Become A Seller
        </div>
      </div>

      {/* Bottom of the Profile Page */}
      <div className="bottom h-[90%] border-2 border-black p-4 bg-white w-full rounded-lg">
        <UserInformation />
      </div>
    </div>
  );
};

export default page;
