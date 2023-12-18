import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function CardInfo() {
  // zoom in on image
  const [[x, y], setXY] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  //fetch card id
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `http://localhost:3000/products/tshirts/${id}`
      );
      const data = await response.json();

      setProduct(data);
      console.log(product);
    }
    fetchProducts();
  }, [id]);
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
          <div className="cardImage">
            <>
              <img
                className="magnifierImg"
                src={product.img}
                alt=""
                onMouseEnter={(e) => {
                  // update image size and turn-on magnifier
                  const elem = e.currentTarget;
                  const { width, height } = elem.getBoundingClientRect();
                  setSize([width, height]);
                  setShowMagnifier(true);
                }}
                onMouseMove={(e) => {
                  const elem = e.currentTarget;
                  const { top, left } = elem.getBoundingClientRect();

                  const x = e.pageX - left - window.scrollX;
                  const y = e.pageY - top - window.scrollY;
                  setXY([x, y]);
                }}
                onMouseLeave={() => {
                  // close magnifier
                  setShowMagnifier(false);
                }}
              />
            </>

            <div
              className="magnifierImage"
              style={{
                display: showMagnifier ? "" : "none",
                position: "absolute",
                pointerEvents: "none",
                height: "200px",
                width: "200px",
                top: `${y - 200 / 2}px`,
                left: `${x - 200 / 2}px`,
                border: "1px solid lightgray",
                backgroundImage: `url(${product.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${imgWidth * 1.5}px ${imgHeight * 1.5}px`, //zoom 1.5
                backgroundPositionX: `${-x * 1.5 + 200 / 2}px`,
                backgroundPositionY: `${-y * 1.5 + 200 / 2}px`,
              }}
            ></div>
          </div>
          <div className="cardDescription">
            <h3>Description</h3>
            {product.description}
          </div>{" "}
        </div>
      )}
      s
    </>
  );
}
