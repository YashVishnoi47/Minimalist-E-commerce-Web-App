const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  IsMasterAdmin: { type: Boolean, default: false },
  IsSeller: { type: Boolean, default: false },
  Store: { type: String, default: "" }, // Link store model here.
  ProductsBought: [{ type: String }], // Link Products model here. And push the product id here which is bought.
  phoneNumber: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
  //   Address Details
  address: { type: String, default: "" },
  zipCode: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  country: { type: String, default: "" },
});

const User = models.User || model("User", UserSchema);

export default User;
