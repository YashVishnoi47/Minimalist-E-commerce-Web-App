import Seller from "../db/models/seller.model";
import connectToDatabase from "../db/mongodb";

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
