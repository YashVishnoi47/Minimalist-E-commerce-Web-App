"use client";
import { DeleteProductByProductID } from "@/lib/actions/Product.action";
import Link from "next/link";
import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

const ProductCard = ({ product, seller }) => {
  const router = useRouter();

  const handleOnclick = async () => {
    router.push(`/product/details/${product._id}`)
  };
  return (
    <div
      onClick={handleOnclick}
      className="w-full md:w-[80%] p-4 cursor-pointer border-2 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center bg-white transition-transform hover:scale-[1.01] duration-200"
    >
      {/* Left Section - Image & Info */}
      <div className="flex w-full md:w-3/4 items-center gap-4">
        {/* Product Image */}
        <div className="h-20 w-20 md:h-24 md:w-24 border border-gray-300 rounded-lg overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col w-full">
          {/* Name and Actions */}
          <div className="flex justify- gap-10 items-center">
            <h2 className="text-lg md:text-xl font-semibold capitalize">
              {product.productName}
            </h2>
          </div>

          {/* Pricing Details */}
          <div className="text-gray-600 text-sm md:text-base">
            <p>
              Price:{" "}
              <span className="font-medium text-black">
                ₹{product.productPrice}
              </span>
            </p>
            <p>
              Discount:{" "}
              <span className="font-medium text-red-500">
                ₹{product.productDiscount}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Quantity & Orders */}
      <div className="w-full md:w-1/4 flex flex-col items-end mt-3 md:mt-0">
        {/* Edit & Delete Icons */}
        <div className="flex gap-3 ">
          <Link href={`/product/update/${product._id}`}>
            <MdEdit className="text-gray-600 hover:text-blue-500 text-xl transition duration-200 cursor-pointer" />
          </Link>
          <MdDelete
            onClick={() => {
              DeleteProductByProductID(product, seller);
            }}
            className="text-gray-600 hover:text-red-500 text-xl transition duration-200 cursor-pointer"
          />
        </div>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          Quantity:{" "}
          <span className="font-semibold">{product.productQuantity}</span>
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          Orders: <span className="font-semibold">20</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
