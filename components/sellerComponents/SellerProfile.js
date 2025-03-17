"use client";
import React from "react";
import { Button } from "../ui/button";
import { UserToSeller } from "@/lib/actions/user.actions";

const SellerProfile = ({ user }) => {
  const userId = user._id;
  console.log(`User ${userId}`);

  const UserToSellers = async () => {
    try {
      const newSeller = await UserToSeller({ userId });
      if (newSeller) {
        console.log("User Converted to Seller Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      You are Not a seller for now
      <Button
        onClick={UserToSellers}
        className="btn-1"
        value="Seller"
        text="Sell My Item"
      >
        Seller
      </Button>
    </div>
  );
};

export default SellerProfile;
