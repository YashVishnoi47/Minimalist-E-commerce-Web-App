"use server";
import connectToDatabase from "../db/mongodb";
import Product from "../db/models/product.model";
import Seller from "../db/models/seller.model";

export const CreateProduct = async function (values, seller) {
  try {
    await connectToDatabase();

    values.productSeller = seller._id;
    // values.productCategory = Category._id;

    const newProduct = await Product.create(values);

    await Seller.findByIdAndUpdate(
      seller._id,
      { $push: { Products: newProduct._id } },
      { new: true }
    );

    return JSON.parse(JSON.stringify(newProduct));
  } catch (error) {
    console.log("Create Product Error:", error);
  }
};


export const getProductBySellerID = async function (seller) {
    const sellerId = seller._id;
    try {
        await connectToDatabase();
        const products = await Product.find({productSeller: sellerId});

        return JSON.parse(JSON.stringify(products));
    } catch (error) {
        console.error("Error fetching products by seller ID:", error);
    }
}
