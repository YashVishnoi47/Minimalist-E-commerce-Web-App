import connectToDatabase from "../db/mongodb";
import User from "../db/models/user.model";

export const createUser = async (user) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("Create User Error:", error);
  }
};

export const updateUser = async (user) => {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: user.clerkId },
      user,
      { new: true }
    );

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log("Update User Error:", error);
  }
};

export const deleteUser = async (user) => {
    try {
        await connectToDatabase();

        const deletedUser = await User.findOneAndDelete({ clerkId: user.clerkId });

        return JSON.parse(JSON.stringify(deletedUser));
    } catch (error) {
        console.log("Delete User Error:", error);
    }
}
