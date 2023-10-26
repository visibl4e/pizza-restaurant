import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
export const SliderImg = [
  {
    image:
      "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "You’re in good hands with us.",
  },
  {
    image:
      "https://images.pexels.com/photos/35625/vegetables-fresh-veggies-food.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Something hot. Something tasty.",
  },
  {
    image:
      "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "A pinch of passion in every dish.",
  },
  {
    image:
      "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Food to put you in a good mood.",
  },
];

export function Slider({ slides }) {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSLide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="prevArrow" onClick={prevSLide} />
        <FaArrowAltCircleRight className="nextArrow" onClick={nextSlide} />

        {SliderImg.map((slide, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <>
                  <img src={slide.image} alt="foodImg" className="image" />
                  <p className="slogan">{slide.text}</p>
                </>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
