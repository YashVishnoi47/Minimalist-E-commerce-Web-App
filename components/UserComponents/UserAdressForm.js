"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserAddressformSchema } from "@/lib/validator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  updateUser,
  updateUserAddressDetails,
} from "@/lib/actions/user.actions";

// Fetching "userId" from UserInformation Component.
const UserAdressForm = (userId) => {
  const router = useRouter();
  // Form Hook
  const form = useForm({
    resolver: zodResolver(UserAddressformSchema),
    // Default Values for the form.
    defaultValues: {
      label: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      street: "",
    },
  });

  // Function to Submit the form and update the adress details for user.
  async function onSubmit(values) {
    try {
      const updatedUser = await updateUserAddressDetails({
        userId: userId.userId,
        values,
      });
      if (updatedUser) {
        router.push(`/userProfile/${userId.userId}`);
      }
    } catch (error) {
      console.log("User Address Update Error:", error);
    }
  }

  return (
    <div className="w-full h-[70vh] flex flex-col justify-start">
      {/* User Adress Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
          {/* FormField Div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Label */}
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Home, Office, etc."
                      {...field}
                      className="rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your country"
                      {...field}
                      className="rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* State */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your state"
                      {...field}
                      className="rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your city"
                      {...field}
                      className="rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Zip Code */}
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter zip code"
                      {...field}
                      className="rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Street */}
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Street address"
                      {...field}
                      className="rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserAdressForm;
