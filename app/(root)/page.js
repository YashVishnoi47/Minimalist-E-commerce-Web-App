import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@clerk/nextjs";
import { getAllProducts } from "@/lib/actions/Product.action";
import Link from "next/link";

export default async function Home() {
  const allProducts = await getAllProducts();
  return (
    <div className="flex w-full h-screen flex-col min-h-screen py-4 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProducts.map((product) => (
          <Link href={`/product/details/${product._id}`}>
            <div
              key={product._id}
              className="border bg-white shadow-lg rounded-lg p-4 flex items-center gap-4"
            >
              {/* Uncomment if you have images */}
              {/* <Image src={product.image} width={100} height={100} alt={product.name} className="rounded-lg" /> */}

              <div>
                <h2 className="text-xl font-semibold">{product.productName}</h2>
                <p className="text-gray-600">{product.productPrice} Rs.</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
