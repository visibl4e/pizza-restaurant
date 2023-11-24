import React, { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
export function ReusableButton() {
  const [goUpButton, setGoUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setGoUpButton(true);
      } else {
        setGoUpButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        onClick={scrollUp}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "50px",
          width: "50px",
          fontSize: "40px",
          background: "transparent",
          cursor: "pointer",
          zIndex: "120",
        }}
      >
        <FaCircleArrowUp
          style={{
            color: "grey",
          }}
        />
      </button>
      ;
    </>
  );
}
