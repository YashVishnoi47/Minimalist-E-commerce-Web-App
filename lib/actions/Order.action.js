"use server";
import Order from "../db/models/order.model";
import Product from "../db/models/product.model";
import Seller from "../db/models/seller.model";
import User from "../db/models/user.model";
import connectToDatabase from "../db/mongodb";

const populateProduct = async (query) => {
  return query.populate({
    path: "Product",
    model: Product,
    select: "ProductName",
  });
};

export const PlaceOrder = async function (product, sellerId, userId) {
  try {
    await connectToDatabase();

    const order = await Order.create({
      ProductID: product._id,
      SellerID: sellerId,
      UserID: userId,
      Quantity: product.quantity,
      Price: product.productPrice,
      // TotalPrice: product.productPrice * product.quantity,
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

      // Use this when  the Seller delivered the product to the buyer
      // await User.findByIdAndUpdate(
      //   product._id,
      //   { $push: { ProductsBought: product._id } },
      //   { new: true }
      // );
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

export const GetOrderByUserID = async function ({ userId }) {
  try {
    await connectToDatabase();

    const AllOrders = await Order.find({ UserID: userId });
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
