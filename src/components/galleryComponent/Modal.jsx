import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
export function Modal({
  active,
  setActive,
  pageSlider,
  previousSlideHandler,
  nextSlideHandler,
}) {
  // function clickPropagation(e) {
  //   e.stopPropagation();
  // }

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
          <img src={pageSlider} alt="" />
        </div>
      </div>
    </>
  );
}
