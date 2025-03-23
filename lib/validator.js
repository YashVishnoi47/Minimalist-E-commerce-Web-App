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

export const ProductformSchema = z.object({
  productName: z
    .string()
    .min(2, { message: "Product name should be at least 2 characters long" }),
    ProductDiscription: z.string().min(10, {
    message: "Product description should be at least 10 characters long",
  }),
  productPrice: z.coerce
    .number()
    .min(1, { message: "Price must be at least 1" }),
  productQuantity: z.coerce
    .number()
    .min(1, { message: "Quantity must be at least 1" }),
  productDiscount: z.coerce
    .number()
    .min(0, { message: "Discount must be at least 0" }),
});
