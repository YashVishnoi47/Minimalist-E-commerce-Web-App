"use server";
import connectToDatabase from "../db/mongodb";
import Seller from "../db/models/seller.model";
import User from "../db/models/user.model";

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

export const findSellerById = async (sellerId) => {
  try {
    connectToDatabase();

    const seller = await Seller.findById(sellerId);

    return JSON.parse(JSON.stringify(seller));
  } catch (error) {
    console.log(error);
  }
};
export const findSellerByUserId = async (sellerId, userId) => {
  try {
    connectToDatabase();

    const user = await User.findById(userId);

    const sellerId = user.sellerId;
    return sellerId;
  } catch (error) {
    console.log(error);
  }
};
