import mongoose, { Schema, model, models } from "mongoose";

const SellerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  SellerAddress: { type: String, required: true },
  StoreName: { type: String, required: true },
  GSTIN_NO: { type: String },
  Description: { type: String },
  // Store: [{ type: mongoose.Types.ObjectId, ref: "Store" }],
});

const Seller = models.Seller || model("Seller", SellerSchema);

export default Seller;
