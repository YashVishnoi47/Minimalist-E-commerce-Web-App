"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();
  return (
    <div className="fixed flex items-center justify-between px-6 w-[60%] h-16 border-2 border-black mt-4 rounded-full bg-white bg-opacity-50">
      {/* Nav Links */}
      <div className="links flex gap-4 w-[30%] -2">
        <Link
          className="rounded-full px-2 hover:bg-gray-100 transition-all duration-200 ease-in-out"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="rounded-full px-2 hover:bg-gray-100 transition-all duration-200 ease-in-out"
          href={"/cart"}
        >
          Cart
        </Link>
        <Link
          className="rounded-full px-2 hover:bg-gray-100 transition-all duration-200 ease-in-out"
          href={"/orders"}
        >
          Orders
        </Link>
      </div>

      {/* Search Bar*/}
      <div className="Search flex gap-4 w-[50%] -2">
        <input
          className="border-2 border-gray-400 rounded-full w-full h-10 p-4"
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* User Controls */}
      <div className="Search flex justify-end items-center gap-4 w-[30%] -2">
        <SignedIn>
          <div className="flex items-center gap-1">
            <h1
              className="rounded-full cursor-pointer px-4 py-2 hover:bg-red-100 transition-all duration-200 ease-in-out capitalize "
              href={"/userProfile"}
            >
              Wellcome! {user?.firstName}
            </h1>
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton className="rounded-full cursor-pointer px-4 py-2 hover:bg-red-100 transition-all duration-200 ease-in-out" />
          <SignOutButton className="rounded-full cursor-pointer px-4 py-2 hover:bg-red-100 transition-all duration-200 ease-in-out" />
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
