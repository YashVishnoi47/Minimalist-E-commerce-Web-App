"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProductformSchema } from "@/lib/validator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateProduct } from "@/lib/actions/Product.action";

const ProductForm = ({ seller }) => {
  const form = useForm({
    resolver: zodResolver(ProductformSchema),
    defaultValues: {
      productName: "",
      ProductDiscription: "",
      productPrice: 0,
      productQuantity: 0,
      productDiscount: 0,
    },
  });

  async function onSubmit(values) {
    try {
      const product = await CreateProduct(values, seller);
      if (product) {
        alert("Product created successfully");
      }
    } catch (error) {
      console.log("Product Form Submition Error:", error);
    }
  }

  return (
    <div>
      <Form {...form}>
        <div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;
