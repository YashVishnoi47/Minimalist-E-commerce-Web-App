"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SellerformSchema } from "@/lib/validator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { createSeller } from "@/lib/actions/seller.action";
import { useRouter } from "next/navigation";

const SellerForm = ({ user }) => {
  const userId = user._id;
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(SellerformSchema),
    defaultValues: {
      StoreName: "",
      phoneNumber: "",
      email: "",
      firstName: "",
      lastName: "",
      SellerAddress: "",
      GSTIN_NO: "",
      Description: "",
    },
  });

  async function onSubmit(values) {
    try {
      const newSeller = await createSeller(values, userId);
      if (newSeller) {
        router.push(`/userProfile/${user._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white w-full max-w-5xl p-10 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Store Name */}
          <FormField
            control={form.control}
            name="StoreName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter store name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Seller Address */}
          <FormField
            control={form.control}
            name="SellerAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seller Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter seller address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* GSTIN Number */}
          <FormField
            control={form.control}
            name="GSTIN_NO"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GSTIN Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter GSTIN number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="Description"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    className="block w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter description"
                    rows="4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <Button className="w-full max-w-sm" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SellerForm;
