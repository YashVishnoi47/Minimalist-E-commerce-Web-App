"use server";
import connectToDatabase from "../db/mongodb";
import Seller from "../db/models/seller.model";
import User from "../db/models/user.model";

// Fuction to create the Seller
export const createSeller = async (values, userId) => {
  try {
    await connectToDatabase();

    const newSeller = await Seller.create(values);
    if (newSeller) {
      const updatedUser = await User.findOneAndUpdate(
        userId,
        { $set: { SellerID: newSeller._id } },
        { new: true }
      );
    }
    if (!newSeller) {
      throw new Error("Seller not created");
    }
    return JSON.parse(JSON.stringify(newSeller));
  } catch (error) {
    console.log(error);
  }
};

// Finding Seller By Id
export const findSellerById = async (sellerId) => {
  try {
    connectToDatabase();

    const seller = await Seller.findById(sellerId);
    if (!seller) {
      throw new Error("Seller not found");
    }

    return JSON.parse(JSON.stringify(seller));
  } catch (error) {
    console.log(error);
  }
};

export const updateSeller = async ({ sellerId, values }) => {
  try {
    await connectToDatabase();

    const updatedSeller = await Seller.findOneAndUpdate(
      { _id: sellerId }, // Filter condition
      values, // Update data
      { new: true } // Return the updated document
    );

    if (!updatedSeller) {
      throw new Error("User not Updated");
    }

    return JSON.parse(JSON.stringify(updatedSeller));
  } catch (error) {
    console.log("Update User Error:", error);
  }
};
