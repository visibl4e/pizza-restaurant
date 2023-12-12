import { createContext, useEffect, useState } from "react";
import { AsideShop } from "./shopComponents/AsideShop";
import { MainShop } from "./shopComponents/MainShop";
import { useParams } from "react-router-dom";

export const ShopFetch = createContext();

export function Shop() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      let url = "http://localhost:3000/products";
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    }
    fetchProducts();
  }, []);
  return (
    <ShopFetch.Provider value={{ product }}>
      <div className="shopComponent">
        <h2
          style={{
            textAlign: "center",
            paddingBottom: "10px",
            fontSize: "46px",
            color: "#575757",
            textDecoration: "underline",
          }}
        >
          Shop
        </h2>
        <div className="shopRow">
          <AsideShop />
          <MainShop />
        </div>
      </div>
    </ShopFetch.Provider>
  );
}
