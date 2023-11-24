import { useEffect, useState } from "react";
import { TfiZoomIn } from "react-icons/tfi";
import { Modal } from "./Modal";

export function Gallery() {
  const [pizzaGallery, setPizzaGallery] = useState([]);
  const [slideNumber, setSliderNumber] = useState(0);
  const [modalToggle, setModalToggle] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);
  useEffect(() => {
    async function fetchGallery() {
      const url = "http://localhost:3000/gallery";
      const response = await fetch(url);
      const data = await response.json();
      setPizzaGallery(data);
      console.log(data);
    }
    fetchGallery();
  }, []);

  //
  const nextSlideHandler = () => {
    slideNumber + 1 === pizzaGallery.length
      ? setSliderNumber(0)
      : setSliderNumber(slideNumber + 1);
  };
  const previousSlideHandler = () => {
    slideNumber === 0
      ? setSliderNumber(pizzaGallery.length - 1)
      : setSliderNumber(slideNumber - 1);
  };
  //toggle modal on index card number
  const handleOpenCard = (index) => {
    setSliderNumber(index);
    setModalToggle(!modalToggle);
  };
  return (
    <>
      <section className="pizzaGallery">
        <div className="container">
          <div className="text">
            <h2>Our Pizza</h2>
            <p>
              With both of our founders originally from Naples, Italy, this
              pizza restaurant has all the features that a traditional Italian
              place would have.
            </p>
          </div>
          <div className="gardGrid">
            {pizzaGallery &&
              pizzaGallery.map((card, index) => {
                return (
                  <>
                    <div
                      className="cardItem"
                      key={index}
                      onClick={() => setModalToggle(!modalToggle)}
                      onMouseEnter={() => setIsHovering(index)}
                      onMouseLeave={() => setIsHovering(-1)}
                    >
                      <img
                        src={card.img}
                        alt="img"
                        onClick={() => handleOpenCard(index)}
                      />
                      <TfiZoomIn
                        className={isHovering === index ? "zoomIn" : "zoomOut"}
                      />
                    </div>

                    {modalToggle && (
                      <Modal
                        active={modalToggle}
                        setActive={setModalToggle}
                        pageSlider={pizzaGallery[slideNumber].img}
                        previousSlideHandler={previousSlideHandler}
                        nextSlideHandler={nextSlideHandler}
                      />
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
