import React from "react";
import { ListProducts } from "./ListProducts";

export function MainShop() {
  return (
    <>
      <div className="primaryShop">
        <div className="filterProductContainer">
          <select>
            <option value="Default" defaultValue>
              Default sorting
            </option>
            <option value="Price-incr">Sort by price: low to high</option>
            <option value="Price-incr">Sort by price: high to low</option>
            <option value="Sale">Sort by sale</option>
          </select>
        </div>
        <ListProducts />
      </div>
    </>
  );
}
