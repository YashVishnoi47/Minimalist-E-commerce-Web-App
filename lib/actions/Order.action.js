"use server";
import Order from "../db/models/order.model";
import Seller from "../db/models/seller.model";
import User from "../db/models/user.model";
import connectToDatabase from "../db/mongodb";

export const PlaceOrder = async function (product, sellerId, userId) {
  try {
    await connectToDatabase();

    const order = await Order.create({
      ProductID: product,
      SellerID: sellerId,
      UserID: userId,
    });

    if (!order) {
      throw new Error("Failed to create order");
    }

    await Seller.findByIdAndUpdate(
      sellerId,
      { $push: { Orders: order._id } },
      { new: true }
    );

    await User.findByIdAndUpdate(
      userId,
      { $push: { Orders: order._id } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(order));
  } catch (error) {
    console.error("Error placing order:", error);
  }
};
