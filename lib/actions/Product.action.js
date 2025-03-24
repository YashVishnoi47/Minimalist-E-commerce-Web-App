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
    const products = await Product.find({ productSeller: sellerId });

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products by seller ID:", error);
  }
};

export const getProductByID = async function (productId) {
  try {
    await connectToDatabase();
    const product = await Product.findById(productId);
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    ś;
  }
};

export const UpdateProduct = async function (productID, values) {
  try {
    await connectToDatabase();
    const updatedProduct = await Product.findByIdAndUpdate(productID, values, {
      new: true,
    });

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return JSON.parse(JSON.stringify(updatedProduct));
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const DeleteProductByProductID = async function (product, seller) {
  try {
    await connectToDatabase();
    const productId = product._id;
    const sellerId = seller._id;

    const deletedProduct = await Product.findOneAndDelete(productId);
    await Seller.findByIdAndUpdate(
      sellerId,
      { $pull: { Products: productId } },
      { new: true }
    );
    return JSON.parse(JSON.stringify(deletedProduct));
  } catch (error) {
    console.error("Error deleting product by seller ID:", error);
  }
};
