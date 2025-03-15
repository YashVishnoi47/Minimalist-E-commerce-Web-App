import { Schema, model, models } from "mongoose";

const AddressSchema = new Schema({
  label: { type: String, default:""}, // e.g., Home, Office
  street: { type: String, default:"" },
  city: { type: String, default:"" },
  state: { type: String, default:""},
  zipCode: { type: String, default:"" },
  country: { type: String, default:"" },
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
