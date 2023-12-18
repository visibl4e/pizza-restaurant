import React, { useContext, useReducer, useState } from "react";
import { ShopFetch } from "../Shop";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ACTIONS = {
  TOGGLE_TSHIRTS: "TSHORTS",
  TOGGLE_HOODIES: "HOODIES",
  TOGGLE_HATS: "HATS",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.TOGGLE_TSHIRTS:
      return {
        categoryToggleTshirt: !state.categoryToggleTshirt,
        arrowToggleTshirt: !state.arrowToggleTshirt,
      };
    case ACTIONS.TOGGLE_HOODIES:
      return {
        categoryToggleHoodie: !state.categoryToggleHoodie,
        arrowToggleHoodie: !state.arrowToggleHoodie,
      };
    case ACTIONS.TOGGLE_HATS:
      return {
        categoryToggleHat: !state.categoryToggleHat,
        arrowToggleHat: !state.arrowToggleHat,
      };
    default:
      throw new Error();
  }
}

export function ProductCategory() {
  const { product } = useContext(ShopFetch);

  //toggle category buttons
  const [state, dispatch] = useReducer(reducer, {
    categoryToggleTshirt: false,
    arrowToggleTshirt: false,
    categoryToggleHoodie: false,
    arrowToggleHoodie: false,
    categoryToggleHat: false,
    arrowToggleHat: false,
  });

  // const maS =
  //   product &&
  //   product
  //     .map((item) => item.category)
  //     .find((item) => item.category === "T-shirt");
  // console.log(maS);
  // const TshirtsFilter =
  //   product && product.map().find((item) => item.category === "T-shirt");
  // console.log(TshirtsFilter);
  // function categoryHandler(e) {
  //   setT(e.target);
  //   setCategoryToggle(!categoryToggle);
  //   setArrowToggle(!arrowToggle);
  // }
  return (
    <>
      <div className="wrapperCategory" id="wrapperCategory">
        <h2>PRODUCT CATEGORIES</h2>
        <div
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_TSHIRTS })}
          className={
            state.arrowToggleTshirt ? "categoryText activeArrowToggle" : ""
          }
        >
          <p>
            T-shirts
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
        <div
          className={state.categoryToggleTshirt ? "wrapper activeCategory" : ""}
        >
          {state.categoryToggleTshirt && (
            <ul>
              {product &&
                product.map((item, index) => (
                  <Link key={index} to={`/shop/${item.id}`}>
                    {item.tshirts &&
                      item.tshirts.map((item, index) => (
                        <li key={index}>
                          {item.name} <img src={item.img} alt="" />
                        </li>
                      ))}
                  </Link>
                ))}
            </ul>
          )}
        </div>

        <div
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_HOODIES })}
          className={
            state.arrowToggleHoodie ? "categoryText activeArrowToggle" : ""
          }
        >
          <p>
            Hoodies
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
        <div
          className={state.categoryToggleHoodie ? "wrapper activeCategory" : ""}
        >
          {state.categoryToggleHoodie && (
            <ul>
              {product &&
                product.map((item, index) => (
                  <Link key={index} to={`/shop/${item.id}`}>
                    {item.hoodies &&
                      item.hoodies.map((item, index) => (
                        <li key={index}>
                          {item.name} <img src={item.img} alt="" />
                        </li>
                      ))}
                  </Link>
                ))}
            </ul>
          )}
        </div>

        <div
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_HATS })}
          className={
            state.arrowToggleHat ? "categoryText activeArrowToggle" : ""
          }
        >
          <p>
            Hats
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
        <div
          className={state.categoryToggleHat ? "wrapper activeCategory" : ""}
        >
          {state.categoryToggleHat && (
            <ul>
              {product &&
                product.map((item, index) => (
                  <Link key={index} to={`/shop/${item.id}`}>
                    {item.hats &&
                      item.hats.map((item, index) => (
                        <li key={index}>
                          {item.name} <img src={item.img} alt="" />
                        </li>
                      ))}
                  </Link>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
