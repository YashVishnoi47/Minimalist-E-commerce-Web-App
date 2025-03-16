"use server";
import connectToDatabase from "../db/mongodb";
import User from "../db/models/user.model";

// Funtion to create new User.
export const createUser = async (user) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("Create User Error:", error);
  }
};

// Function to Update User.
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

// Funtion to Delete User.
export const deleteUser = async (user) => {
  try {
    await connectToDatabase();

    const deletedUser = await User.findOneAndDelete({ clerkId: user.clerkId });

    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    console.log("Delete User Error:", error);
  }
};

// Function to get User by MongoDB ID.
export const getUserById = async (userId) => {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log("Get User Error:", error);
  }
};

// Funtion to Update User Adress Details.
export const updateUserAddressDetails = async ({userId, values}) => {
  try {
    await connectToDatabase();
    console.log("UserId form User Actions", userId);

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId }, // ✅ Correct filter format
      { $set: { addresses: values } }, // ✅ Ensures it updates the `addresses` array
      { new: true } // Returns updated document
    );

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {}
};
