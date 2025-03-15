import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";

const Navbar = async () => {
 const {sessionClaims} = auth();
 const userId = sessionClaims?.publicMetadata?.userId;
 const user = await getUserById(userId);




  return (
    <div className="flex relative items-center justify-between w-full h-20 border-2 border-black bg-white bg-opacity-50 p-2">
      {/* Logo */}
      <Link className="w-[8%] border-black  h-full flex justify-start items-center" href="/"><h1 className="font-bold text-4xl">Logo</h1></Link>

      {/* Nav Links */}
      <div className="links h-full justify-start items-center border-black flex gap-4 w-[20%] -2">
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
      <div className="Search h-full justify-center items-center border-black flex gap-4 w-[40%] -2">
        <input
          className="border-2 border-gray-400 rounded-full w-full h-10 p-4"
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* User Controls */}
      <div className="Search h-full border-black flex justify-end items-center gap-4 w-[30%] ">
        <SignedIn>
          <div className="flex items-center gap-1">
            <Link
              className="rounded-full cursor-pointer px-4 py-2 hover:bg-red-100 transition-all duration-200 ease-in-out capitalize "
              href={`/userProfile/${userId}`}
            >
              Wellcome! {user?.firstName}
            </Link >
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton className="rounded-full cursor-pointer px-4 py-2 hover:bg-red-100 transition-all duration-200 ease-in-out" />
          <SignUpButton className="rounded-full cursor-pointer px-4 py-2 hover:bg-red-100 transition-all duration-200 ease-in-out" />
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
