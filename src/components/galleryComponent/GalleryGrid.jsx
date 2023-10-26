// import { useEffect, useState } from "react";

// export function Gallery() {
//   const [pizza, setPizza] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [modal, setModal] = useState([]);
//   const [modalToggle, setModalToggle] = useState(false);

//   useEffect(() => {
//     // fetchPizza();
//     setLoading(true);
//     const controller = new AbortController();
//     fetch("https://beverages-and-desserts.p.rapidapi.com/desserts", {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "3b95fa5a6amsh7c8a46213228df8p1453a6jsn08e5a5b903e0",
//         "X-RapidAPI-Host": "beverages-and-desserts.p.rapidapi.com",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setPizza(data);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//     return () => {
//       controller.abort();
//     };
//   }, []);

//   const popUpModal = (item) => {
//     setModal([item]);
//     setModalToggle(!modalToggle);
//   };

//   return (
//     <>
//       <section className="pizzaGallery">
//         <div className="container">
//           <div className="text">
//             <h2>Our Pizza</h2>
//             <p>
//               With both of our founders originally from Naples, Italy, this
//               pizza restaurant has all the features that a traditional Italian
//               place would have.
//             </p>
//           </div>
//           <div className="gardGrid">
//             {pizza.map((item) => {
//               return (
//                 <>
//                   <div className="card" onClick={() => popUpModal(item)}>
//                     <img key={item.id} src={item.img[1].lg} alt="img" />
//                     <div className="text">
//                       <p>
//                         <span>Name:</span> {item.name}
//                       </p>
//                       <button onClick={() => popUpModal(item)}>
//                         Show more
//                       </button>
//                       {modalToggle && (
//                         <div className="modal">
//                           {modal.map((pop) => {
//                             return (
//                               <>
//                                 <div
//                                   className="overlay"
//                                   style={{ opacity: "0.3" }}
//                                   onClick={() => setModalToggle(!modalToggle)}
//                                 ></div>
//                                 <div className="modalContent">
//                                   <img
//                                     className="modalImage"
//                                     src={pop.img[0].sm}
//                                   />
//                                   <div className="modalText">
//                                     <p>
//                                       <span>Name:</span> {pop.name}
//                                     </p>
//                                     <p>
//                                       <span>Description:</span>
//                                       {pop.desc}
//                                     </p>
//                                     <p>
//                                       <span>Price:</span> {item.price}
//                                     </p>
//                                   </div>
//                                   <button
//                                     className="closeModal"
//                                     onClick={() => setModalToggle(!modalToggle)}
//                                   >
//                                     Close
//                                   </button>
//                                 </div>
//                               </>
//                             );
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { useEffect, useState } from "react";

export function Gallery() {
  const [pizza, setPizza] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetch(
      "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "3b95fa5a6amsh7c8a46213228df8p1453a6jsn08e5a5b903e0",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPizza(data.hints);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  const popUpModal = (item) => {
    setModal([item]);
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
            {pizza.map((item) => {
              return (
                <>
                  <div className="card" onClick={() => popUpModal(item)}>
                    <img
                      key={item.food.foodId}
                      src={item.food.image}
                      alt="img"
                    />
                    <div className="text">
                      <p>
                        <span>Name:</span> {item.food.knownAs}
                      </p>
                      <button onClick={() => popUpModal(item)}>
                        Show more
                      </button>
                      {modalToggle && (
                        <div className="modal">
                          {modal.map((pop) => {
                            return (
                              <>
                                <div
                                  className="overlay"
                                  style={{ opacity: "0.3" }}
                                  onClick={() => setModalToggle(!modalToggle)}
                                ></div>
                                <div className="modalContent">
                                  <img
                                    className="modalImage"
                                    src={pop.food.image}
                                  />
                                  <div className="modalText">
                                    <p>
                                      <span>Name:</span> {pop.food.knownAs}
                                    </p>
                                    <p>
                                      <span>Nutrients:</span>
                                      {pop.food.category}
                                    </p>
                                  </div>
                                  <button
                                    className="closeModal"
                                    onClick={() => setModalToggle(!modalToggle)}
                                  >
                                    Close
                                  </button>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
