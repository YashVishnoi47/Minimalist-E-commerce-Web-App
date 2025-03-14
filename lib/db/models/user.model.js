import { Schema, model, models } from "mongoose";

const AddressSchema = new Schema({
  label: { type: String, required: true }, // e.g., Home, Office
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
}, { _id: false }); 

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  IsMasterAdmin: { type: Boolean, default: false },
  IsSeller: { type: Boolean, default: false },
  Store: { type: String, default: "" },
  ProductsBought: [{ type: String }], 
  phoneNumber: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
  addresses: [AddressSchema],
});

const User = models.User || model("User", UserSchema);

export default User;
