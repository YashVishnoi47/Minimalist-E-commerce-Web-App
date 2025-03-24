"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProductformSchema } from "@/lib/validator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateProduct, UpdateProduct } from "@/lib/actions/Product.action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UploadButton, UploadDropzone } from "@uploadthing/react";

const ProductForm = ({ seller, type, product }) => {
  const productID = product._id;
  const form = useForm({
    resolver: zodResolver(ProductformSchema),
    defaultValues:
      product && type === "update"
        ? {
            productName: product.productName,
            ProductDiscription: product.ProductDiscription,
            productPrice: product.productPrice,
            productQuantity: product.productQuantity,
            productDiscount: product.productDiscount,
          }
        : {
            productName: "",
            ProductDiscription: "",
            productPrice: 0,
            productQuantity: 0,
            productDiscount: 0,
          },
  });

  // Function to Submit the Product Form and Create the Product or Update the product.
  async function onSubmit(values) {
    try {
      if (type === "create") {
        const product = await CreateProduct(values, seller);
        if (product) {
          alert("Product created successfully");
        }
      }
      if (type === "update") {
        const updatedproduct = await UpdateProduct(productID, values);
        if (updatedproduct) {
          form.reset();
          alert("Product Updated successfully");
          console.log("updated");
        }
      }
    } catch (error) {
      console.log("Product Form Submition Error:", error);
    }
  }

  return (
    <div>
      <Form {...form}>
        <div className="">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            {/* productName */}
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* productDescription */}
            <FormField
              control={form.control}
              name="ProductDiscription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* productPrice */}
            <FormField
              control={form.control}
              name="productPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* productQuantity */}
            <FormField
              control={form.control}
              name="productQuantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter quantity"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* productDiscount */}
            <FormField
              control={form.control}
              name="productDiscount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Discount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter discount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Image Upload and Fetch is Left for the End */}
            {/* <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-1 items-start">
                  <FormControl className="border-2 border-purple-800 w-full">
                    <UploadButton className="border-2 border-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;
