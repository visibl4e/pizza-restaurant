import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopFetch } from "../Shop.jsx";

export function ListProducts() {
  const { product } = useContext(ShopFetch);

  return (
    <>
      <div className="productCards">
        {product &&
          product.map((item, index) => {
            return (
              <>
                {item.tshirts &&
                  item.tshirts.map((item) => (
                    <Link
                      style={{ color: "grey" }}
                      key={index}
                      to={`/shop/${item.id}`}
                    >
                      <div key={index} className="productCard">
                        <img src={item.img} />
                        <div className="infoCard">
                          <h3>{item.name}</h3>
                          <p className="category">{item.category}</p>
                          <p className="price">{item.prevPrice}</p>
                          <button className="addToCart">Add to cart</button>
                        </div>
                      </div>
                    </Link>
                  ))}
              </>
            );
          })}
      </div>
    </>
  );
}
