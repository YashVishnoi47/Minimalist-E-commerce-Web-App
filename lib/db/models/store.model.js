import mongoose, { Schema, model, models } from "mongoose";

const StoreSchema = new Schema({
  StoreName: { type: String, required: true },
  StoreEmail: { type: String, required: true },
  StorePhoneNumber: { type: String, required: true },
  StoreLogo: { type: String },
  StoreAddress: { type: String },
  StoreProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  GSTIN_NO: { type: String },
  StoreCategory: { type: Schema.Types.ObjectId, ref: "Category" },

  StoreDescription: { type: String },
  StoreRating: { type: Number, default: 0 },
  //   StoreOrders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  //   StoreUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Store = models.Store || model("Store", StoreSchema);

export default Store;
