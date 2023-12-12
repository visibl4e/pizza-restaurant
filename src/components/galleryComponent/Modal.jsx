import React from "react";

export function Modal({
  active,
  setActive,
  pageSlider,
  previousSlideHandler,
  nextSlideHandler,
  pizzaGallery,
  slideNumber,
}) {
  // const timeRef = useRef(null);
  // useEffect(() => {
  //   //clear the timeout if wwe click on next/priveous buttons
  //   if (timeRef.current) {
  //     clearTimeout(timeRef.current);
  //   }
  //   console.log("use effect");
  //   timeRef.current = setTimeout(() => {
  //     nextSlideHandler();
  //   }, 3000);

  //   return () => clearTimeout(timeRef.current);
  // }, [nextSlideHandler]);
  return (
    <>
      <div className={active ? "modal activeModal" : "modal"}>
        <div
          className="galleryOverlay"
          onClick={() => setActive(!active)}
        ></div>
        <button className="previousBtn" onClick={previousSlideHandler}>
          &lsaquo;
        </button>
        <button className="nextBtn" onClick={nextSlideHandler}>
          &rsaquo;
        </button>
        <button className="closeModal" onClick={() => setActive(!active)}>
          &times;
        </button>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <div className="carousel">
            {pizzaGallery &&
              pizzaGallery.map((image) => {
                return (
                  <>
                    <div className="carouselElement">
                      <img
                        key={image}
                        src={image.img}
                        alt=""
                        style={{ translate: `${-100 * slideNumber}%` }}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
