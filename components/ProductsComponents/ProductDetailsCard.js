"use client";
import React from "react";
import { Button } from "../ui/button";
import { PlaceOrder } from "@/lib/actions/Order.action";
import Image from "next/image";

const OrderComponent = ({ product, sellerId, user }) => {
  const userId = user._id;
  // product ID , Seller ID , User ID
  const HandlePlaceOrder = async () => {
    const newOrder = await PlaceOrder(product, sellerId, userId);
    if (newOrder) {
      alert("Order Placed Successfully!");
    }
  };
  return (
    <div className="w-full flex flex-col min-h-screen px-4 lg:px-10 py-6">
      {/* Product Details */}
      <div className="flex flex-col lg:flex-row w-full gap-8 items-center">
        {/* Product Image */}
        <div className="w-full lg:w-[35%] h-[300px] lg:h-[400px] border-2 border-black rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={product.imageUrl} // Ensure this is a valid image URL
            alt={product.productName}
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col w-full lg:w-[60%]">
          {/* Product Name */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize">
            {product.productName}
          </h1>

          {/* Product Description */}
          <p className="text-sm sm:text-md text-gray-600 mt-2">
            {product.ProductDiscription}
          </p>

          {/* Price & Discount */}
          <div className="flex items-center gap-3 mt-4">
            <h1 className="text-xl sm:text-3xl text-green-500 font-medium">
              ₹{product.productPrice}
            </h1>
            {product.productDiscount > 0 && (
              <h1 className="text-md sm:text-lg line-through text-red-500">
                {product.productDiscount}% OFF
              </h1>
            )}
          </div>

          {/* Buttons Section */}
          <div className="flex gap-6 mt-6">
            {user.SellerID === sellerId ? (
              <button
                className="w-full sm:w-1/2 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed"
                disabled
              >
                Owner cannot buy its own product
              </button>
            ) : (
              <>
                {/* Buy Now Button */}
                <button
                  onClick={HandlePlaceOrder}
                  className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95 w-1/2 sm:w-[40%]"
                >
                  <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                    <Image
                      src={"/icons/cart.svg"}
                      width={30}
                      height={30}
                      alt="cart"
                    />
                    Buy Now
                  </span>
                </button>

                {/* Add to Cart Button */}
                <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95 w-1/2 sm:w-[40%]">
                  <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                    <Image
                      src={"/icons/cart.svg"}
                      width={30}
                      height={30}
                      alt="cart"
                    />
                    Add to Cart
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Other Products Suggestions */}
      <div className="w-full mt-10">
        {/* You can map other products here */}
      </div>

      {/* reviews */}
      <div className="w-full mt-10">
        {/* You can map reviews here */}
      </div>
    </div>
  );
};

export default OrderComponent;
