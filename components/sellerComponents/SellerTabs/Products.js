import ProductForm from "@/components/ProductsComponents/ProductForm";
import React from "react";

const Products = ({ seller }) => {
  return (
    <div>
      <ProductForm seller={seller} />
    </div>
  );
};

export default Products;
