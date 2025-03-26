"use server";
import Order from "../db/models/order.model";
import Seller from "../db/models/seller.model";
import User from "../db/models/user.model";
import connectToDatabase from "../db/mongodb";

export const PlaceOrder = async function (product, sellerId, userId) {
  try {
    await connectToDatabase();

    const order = await Order.create({
      ProductID: product._id,
      SellerID: sellerId,
      UserID: userId,
      Quantity: 1,
      TotalPrice: product.productPrice,
      OrderStatus: "Pending",
    });

    if (order) {
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
    }

    return JSON.parse(JSON.stringify(order));
  } catch (error) {
    console.error("Error placing order:", error);
  }
};

export const GetOrderBySellerID = async function ({ sellerId }) {
  try {
    await connectToDatabase();

    const AllOrders = await Order.find({ SellerID: sellerId });
    if (!AllOrders) {
      throw new Error("No orders found for the seller");
    }

    return JSON.parse(JSON.stringify(AllOrders));
  } catch (error) {
    console.error("Error getting orders by seller ID:", error);
  }
};

export const GetOrderOnConditions = async function ({ conditions }) {
  try {
    await connectToDatabase();

    const Orders = await Order.find(conditions);
    if (!Orders) {
      throw new Error("No orders found for the seller");
    }

    return JSON.parse(JSON.stringify(Orders));
  } catch (error) {
    console.error("Error getting orders by seller ID:", error);
  }
};
