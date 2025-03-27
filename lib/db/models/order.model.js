import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  UserID: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  ProductID: { type: mongoose.Types.ObjectId, ref: "Product", required: true },
  SellerID: { type: mongoose.Types.ObjectId, ref: "Seller", required: true },
  Quantity: { type: Number, default: 1 },
  Price: { type: Number, required: true },
  // TotalPrice: { type: Number, required: true },
  OrderDate: { type: Date, default: Date.now },
  //   ShippingAddress: { type: String, required: true },
  Status: { type: String, default: "Pending" }, // Pending, Shipped, Delivered, Canceled
});
const Order = models.Order || model("Order", OrderSchema);

export default Order;
