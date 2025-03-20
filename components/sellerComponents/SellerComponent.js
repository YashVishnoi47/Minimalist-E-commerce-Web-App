"use client";
import React from "react";
import { Button } from "../ui/button";
import { UserToSeller } from "@/lib/actions/user.actions";
import { CheckCircle, CheckCircleIcon, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import SellerForm from "./SellerForm";
import Link from "next/link";
import ButtonA from "../UtilityComponents/ButtonA";

const Seller = ({ user, seller }) => {
  const userId = user._id;
  const router = useRouter();

  const handleUserToSellers = async () => {
    try {
      const newSeller = await UserToSeller({ userId });
      if (newSeller?.success) {
        router.push(`/userProfile/${userId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // For the user Which is not a seller.
  if (user.IsSeller === false) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white ">
        <div className="max-w-lg p-8 bg-white text-gray-900 rounded-2xl shadow-2xl text-center">
          <div className="flex justify-center mb-4">
            {/* <Store className="text-blue-500 w-16 h-16" /> */}
          </div>
          <h2 className="text-3xl font-extrabold mb-2">
            Start Selling with Us!
          </h2>
          <p className="text-gray-600 mb-6">
            Turn your ideas into income. Join thousands of successful sellers
            growing their businesses on our platform.
          </p>

          <div className="flex flex-col gap-3 text-left">
            <p className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Easy product listing
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Secure payment handling
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> 24/7 customer support
            </p>
          </div>

          <Button
            onClick={handleUserToSellers}
            className="mt-6 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            <Rocket className="mr-2" /> Start Selling Now
          </Button>
        </div>
      </div>
    );
  }

  // For the User Which is a seller.
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white text-center p-6">
      {!user.SellerID ? (
        <div className="w-full h-1/2 flex flex-col justify-center items-center">
          <h1 className="text-xl">You don't have a Seller Account</h1>
          <Link
            className="mt-4 hover:cursor-pointer"
            href={`/becomeSeller/${user._id}`}
          >
            <ButtonA className="cursor-pointer">Hello</ButtonA>
          </Link>
        </div>
      ) : (
        <div>{seller.firstName}</div>
      )}
    </div>
  );
};

export default Seller;
