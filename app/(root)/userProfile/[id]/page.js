import React from "react";
import UserInformation from "@/components/UserComponents/UserInformation";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import DynamicProofilePagecomponent from "@/components/DynamicProofilePagecomponent";

const page = async ({ params }) => {
  const { id } = params;
  const user = await getUserById(id);
  const { userId } = auth();

  return (
    <div >
      <DynamicProofilePagecomponent user={user} userId={userId} />
      
    </div>
  );
};

export default page;
