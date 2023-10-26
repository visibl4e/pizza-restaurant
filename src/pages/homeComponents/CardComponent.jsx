import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
export function CardComponent() {
  const cardsRecommend = [
    {
      image:
        "https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image11.jpg",
      text: "CAPRICCIOSA................................................",
      span: "$15",
      button: "See filling",
      id: 0,
      ingredientOne: "Crushed canned plum tomatoes",
      ingredientTwo: "Mozzarella",
      ingredientThree: "Prosciutto cotto ",
      ingredientFour: "Artichoke heart wedges in olive oil",
      ingredientFive: "Fresh cremini mushrooms",
      ingredientSix: "Pitted black olives",
      imgOne:
        "https://media.istockphoto.com/id/480194612/photo/single-ball-of-mozzarella-cheese-sliced-and-isolated-on-rustice.jpg?b=1&s=612x612&w=0&k=20&c=kH5GEqDHFFaJ4LdBr4UaJZgbGLXZcbekxMZXIjNXzR0=",
    },
    {
      image:
        "https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image10.jpg",
      text: " MARINARA................................................",
      span: "$22",
      button: "See filling",
      id: 1,
      ingredientOne: "Olive oil",
      ingredientTwo: "Oregano",
      ingredientThree: "Garlic",
      ingredientFour: "Tomato",
    },
    {
      image:
        "https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image10.jpg",
      text: "CRUDO DE PARM................................................",
      span: "$18",
      button: "See filling",
      id: 2,
      ingredientOne: "Balsamic sauce",
      ingredientTwo: "Mozzarella",
      ingredientThree: "Cream sauce",
      ingredientFour: "Parma ham",
    },
    {
      image:
        "https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image9.jpg",
      text: " AMERICANO ................................................",
      span: "$13",
      button: "See filling",
      id: 3,
      ingredientOne: "Tomato ",
      ingredientTwo: "Mozzarella",
      ingredientThree: "Gran Cucina Pizza",
      ingredientFour: "Sausage ",
      ingredientFive: "Sweet peppers in oil",
      ingredientSix: "Pitted olives",
    },
  ];

  const [btnDropdown, setBtnDropdown] = useState(false);

  useEffect(() => {
    setBtnDropdown(null);
  }, []);
  return (
    <>
      {cardsRecommend.map((card, id) => {
        return (
          <div className="cardRecommend" key={card.id}>
            <img src={card.image}></img>
            <p>
              {card.text}
              <span>{card.span}</span>
            </p>
            <button className="seeMoreBtn" onClick={() => setBtnDropdown(id)}>
              {card.button}
            </button>
            {btnDropdown == id ? (
              <ul className="cardList activeList">
                <li>{card.ingredientOne}</li>
                <li>{card.ingredientTwo}</li>
                <li>{card.ingredientThree}</li>
                <li>{card.ingredientFour}</li>

                <li>{card.ingredientFive}</li>
                <li>{card.ingredientSix}</li>
                <button
                  className="closeListBtn"
                  onClick={() => setBtnDropdown(null)}
                >
                  <AiOutlineClose />
                </button>
              </ul>
            ) : (
              <ul className="cardList">
                <li>{card.ingredientOne}</li>
                <li>{card.ingredientTwo}</li>
                <li>{card.ingredientThree}</li>
                <li>{card.ingredientFour}</li>
                <li>{card.ingredientFive}</li>
                <li>{card.ingredientSix}</li>
              </ul>
            )}
          </div>
        );
      })}
    </>
  );
}
