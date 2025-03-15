"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UserInformation = (user) => {
  // const { user } = useUser();

  return (
    <div className="w-full min-h-screen bg-gray-50 px-12 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Personal Information
      </h1>

      <div className="flex flex-col gap-8">
        {/* Top Section (User Info) */}
        <div className="w-2/3 bg-white shadow-md rounded-lg p-6">
          {/* Profile */}
          <div className="flex items-center gap-6 mb-6">
            {/* <Image
              src={user?.imageUrl || "/default-profile.png"}
              alt="User Profile"
              width={90}
              height={90}
              className="rounded-full border-4 border-purple-500"
            /> */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 capitalize">
                {user?.firstName} {user?.lastName}
              </h2>
              <p className="text-gray-600">
                {user?.emailAddresses?.[0]?.emailAddress || "No email provided"}
              </p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Full Name</h3>
              <div className="flex gap-2 mt-2">
                <input
                  className="w-1/2 p-3 border border-gray-300 rounded bg-gray-100"
                  disabled
                  value={user?.firstName || ""}
                />
                <input
                  className="w-1/2 p-3 border border-gray-300 rounded bg-gray-100"
                  disabled
                  value={user?.lastName || ""}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Email Address
              </h3>
              <p className="w-full p-3 mt-2 border border-gray-300 rounded bg-gray-100">
                {user?.emailAddresses?.[0]?.emailAddress || "No email provided"}
              </p>
            </div>

            {/* Phone Number */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Phone Number
              </h3>
              <p className="w-full p-3 mt-2 border border-gray-300 rounded bg-gray-100">
                {user?.primaryPhoneNumber || "+91 00000 00000"}
              </p>
            </div>

            {/* Username */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Username</h3>
              <p className="w-full p-3 mt-2 border border-gray-300 rounded bg-gray-100">
                {user?.username || "Not Set"}
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Section (User Info) */}
        <div className="w-2/3 bg-white shadow-md rounded-lg p-6">
          {/* Adress */}
          <div className="flex items-center gap-6 mb-6">
            <div>
              <div className="flex gap-2">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">
                  Adress
                </h2>
                <Badge className={"px-2"} variant="default">
                  {/* User.Lable */}
                </Badge>
              </div>
              <p className="text-gray-600">
                {user?.country || "No Country provided"}
              </p>
            </div>
          </div>
          {/* State and City Details */}
          <div className="grid grid-cols-2 gap-6">
            {/* State and city  */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                State and City
              </h3>
              <div className="flex gap-2 mt-2">
                <input
                  className="w-1/2 p-3 border border-gray-300 rounded bg-gray-100"
                  disabled
                  value={user?.State || "Uttar Pardesh"}
                />
                <input
                  className="w-1/2 p-3 border border-gray-300 rounded bg-gray-100"
                  disabled
                  value={user?.City || "Noida"}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">ZIP code</h3>
              <p className="w-full p-3 mt-2 border border-gray-300 rounded bg-gray-100">
                {user?.ZipCode || "No Zip code provided"}
              </p>
            </div>

            {/* Phone Number */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Phone Number
              </h3>
              <p className="w-full p-3 mt-2 border border-gray-300 rounded bg-gray-100">
                {user?.primaryPhoneNumber || "+91 00000 00000"}
              </p>
            </div>

            {/* Username */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Street</h3>
              <p className="w-full p-3 mt-2 border border-gray-300 rounded bg-gray-100">
                {user?.street || "Not Set"}
              </p>
            </div>
          </div>
        </div>

        <div className="w-2/3 bg-white shadow-md rounded-lg p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
