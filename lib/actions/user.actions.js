"use server";
import connectToDatabase from "../db/mongodb";
import User from "../db/models/user.model";
import mongoose from "mongoose";

// Funtion to create new User.
export const createUser = async (user) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    if (!newUser) {
      throw new Error("User not created");
    }
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

    if (!updatedUser) {
      throw new Error("User not Updated");
    }

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
    if (!user) {
      throw new Error("User not found");
    }
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log("Get User Error:", error);
  }
};

// Funtion to Update User Adress Details.
export const updateUserAddressDetails = async ({ userId, values }) => {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { addresses: values } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log("Update User Address Error:", error);
  }
};

export const UserToSeller = async ({ userId }) => {
  try {
    await connectToDatabase();
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (user.IsSeller === false) {
      user.IsSeller = true;
    }

    await user.save();
  } catch (error) {
    console.log("User To Seller Error:", error);
  }
};
