import { z } from "zod";

export const UserAddressformSchema = z.object({
  label: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  zipCode: z.string(),
  street: z.string(),
});

export const SellerformSchema = z.object({
  StoreName: z.string().min(2, { message: "Enter a valid Phone Number" }),
  phoneNumber: z.string().min(10, { message: "Enter a valid Phone Number" }),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  SellerAddress: z.string(),
  GSTIN_NO: z.string(),
  Description: z.string().optional(),

  // photo: z.string(),
});

// export const StoreformSchema = z.object({
//   StoreName: z.string().min(2, { message: "Minimum 2 characters required" }),
//   StoreEmail: z.number(),
//   StorePhoneNumber: z
//     .string()
//     .min(10, { message: "Enter a valid Phone Number" }),
//   StoreAddress: z.string().min(5, { message: "Minimum 5 characters required" }),
//   GSTIN_NO: z.string(),
// });
