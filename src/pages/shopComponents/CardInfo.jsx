import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function CardInfo() {
  // zoom in on image
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMgnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  //fetch card id
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProducts();
  }, [id]);

  // function to handle mouse move on image
  const handlerMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    // calculate the position x and y as a percentage based on cursor location

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
    //update cursor position to store current mouse cursor coordinates relative to mouse location
  };

  return (
    <>
      {product && (
        <div className="cardRow">
          <div className="asideInfo">
            <p className="cardCtegory">{product.category}</p>
            <p className="cardName">{product.name}</p>
            <p className="cardPrice">{product.prevPrice}</p>
            <p className="cardSize">Available in: {product.size} size</p>
            <label htmlFor="quantity">
              {product.name} quantity:
              <input type="number" defaultValue={1} />
            </label>
            <button className="addBtn">Add to cart</button>
            <br />
            <Link className="backShopLnk" to="/shop">
              Go back to shopping
            </Link>
          </div>
          <div
            className="cardImage"
            onMouseEnter={() => setShowMgnifier(true)}
            onMouseLeave={() => setShowMgnifier(false)}
            onMouseMove={handlerMouseMove}
          >
            <img className="magnifierImg" src={product.img} alt="" />
            {showMagnifier && (
              <div
                style={{
                  position: "absolute",
                  left: `${cursorPosition.x - 100}px`,
                  top: `${cursorPosition.y - 100}px`,
                  pointerEvents: "none",
                }}
              >
                <div
                  className="magnifierImage"
                  style={{
                    backgroundImage: `url(${product.img})`,
                    backgroundPosition: `${position.x}% ${position.y}%`,
                  }}
                ></div>
              </div>
            )}
          </div>
          <div className="cardDescription">
            <h3>Description</h3>
            {product.description}
          </div>{" "}
        </div>
      )}
    </>
  );
}
