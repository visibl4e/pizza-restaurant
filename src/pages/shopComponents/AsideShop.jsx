import React from "react";
import { ProductCategory } from "./ProductCategory";
import { Products } from "./Products";
export function AsideShop() {
  return (
    <>
      <div className="secondaryShop">
        <ProductCategory />
        <Products />
      </div>
    </>
  );
}
