import React from "react";
import UserInformation from "@/components/UserInformation";
import { getUserById } from "@/lib/actions/user.actions";
import UserAddressform from "@/components/UserAdressForm";

const page = async ({ params }) => {
  const { id } = params;
  const user = await getUserById(id);

  return (
    <div className="w-full h-screen relative flex flex-col items-center gap-2  justify-start">
      {/* Top of the Profile Page */}
      <div className="top flex gap-2 items-center border-b-2 border-black p-1 h-[10%] px-2 w-full rounded-lg">
        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          User Information
        </div>
        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          Wishlist
        </div>
        <div className="btn-1 flex justify-center items-center border-2 cursor-pointer rounded-xl h-[60%] w-[15%]">
          Become A Seller
        </div>
      </div>

      {/* Bottom of the Profile Page */}
      <div className="bottom h-[90%]  border-black p-4 bg-white w-full rounded-lg">
        <UserInformation user={user} />
        <UserAddressform />
      </div>
    </div>
  );
};

export default page;
