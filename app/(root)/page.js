import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex w-full border-2 h-screen border-black flex-col min-h-screen py-2">
     Root page
    </div>
  );
}
