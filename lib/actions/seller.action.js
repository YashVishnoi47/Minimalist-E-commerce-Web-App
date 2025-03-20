"use server";
import connectToDatabase from "../db/mongodb";
import Seller from "../db/models/seller.model";
import User from "../db/models/user.model";

export const createSeller = async (values) => {
  try {
    await connectToDatabase();

    const newSeller = await Seller.create(values);
    if (!newSeller) {
      throw new Error("Seller not created");
    }
    return JSON.parse(JSON.stringify(newSeller));
  } catch (error) {
    console.log(error);
  }
};

export const findSellerById = async (sellerId, userId) => {
  try {
    connectToDatabase();

    const seller = await Seller.findById(sellerId);
    if (seller) {
      const updatedUser = await User.findOneAndUpdate(
        userId,
        { $set: { seller: seller._id } },
        { new: true }
      );
    }
    return JSON.parse(JSON.stringify(seller));
  } catch (error) {
    console.log(error);
  }
};
