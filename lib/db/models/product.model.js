import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    productName: { type: String, required: true },
    ProductDiscription: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    productDiscount: { type: Number },
    productImage: { type: String },
    // productCategory: { type: Schema.Types.ObjectId, ref: "Category" },
    productSeller: { type: Schema.Types.ObjectId, ref: "Seller" },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);
const Product = models.Product || model("Product", ProductSchema);

export default Product;
