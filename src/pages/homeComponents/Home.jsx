import { Link } from "react-router-dom";
import React from "react";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiSolidQuoteRight } from "react-icons/bi";
import { CardComponent } from "./CardComponent";
export function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };
  const cards = [
    {
      image:
        "https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/images28.png",
      text: "Certificate of Excellence",
      year: 2015,
      key: 1,
      id: "one",
    },
    {
      image:
        "https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/images25.png",
      text: "Certificate of Excellence",
      year: 2022,
      key: 2,
      id: "two",
    },
    {
      image:
        "https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/images26.png",
      text: "Certificate of Excellence",
      year: 2016,
      key: 3,
      id: "three",
    },
    {
      image:
        "https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/images27.png",
      text: "Certificate of Excellence",
      year: 2015,
      key: 4,
      id: "four",
    },
  ];
  return (
    <>
      <section className="homePresentSection">
        <div className="homeContainer">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img>
          <div className="infoContainer">
            <div className="infoRow">
              <h2 className="motto">Pizza to fill your soul</h2>
              <div className="smText">you have to taste it</div>
              <div className="smTextLink">
                We are baking pizzas so good they melt in your mouth!Book online
                or call <Link to="/contacts">(555)123-4567</Link>
              </div>
              <Link className="reservationLink" to="/contacts">
                Make a Reservation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="homeCertificateSection">
        <div className="certificateContainer">
          <div className="certificateRow">
            {cards.map((card) => {
              return (
                <div
                  className="card "
                  key={card.key}
                  id={card.id}
                  // onMouseOver={handleMouseOver}
                >
                  <img src={card.image} />
                  <p>{card.text}</p>
                  <span>{card.year}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="homeHotOffer">
        <div className="hotOfferContainer">
          <div className="imageContainer">
            <div className="tag">
              <span className="priceText">specialty pizza</span>
              <span className="priceAmount">ONLY $13.99</span>
            </div>
            <div className="secondTag">
              <span className="priceText2">Each Monday</span>
              <span className="priceAmount2">-15% off</span>
            </div>

            <img src="https://images.pexels.com/photos/17543183/pexels-photo-17543183/free-photo-of-photo-of-a-vegetarian-pizza-on-a-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <img src="https://images.pexels.com/photos/17341441/pexels-photo-17341441/free-photo-of-pizzas-with-various-toppings-served-on-wooden-plates.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </div>
          <div className="textContainer">
            <h3>Mia Ittalonni’s Chef</h3>
            <p>
              A native of the Italian city of Naples, Simon is one of the best
              pizzaioli in the US. Want a proof of that?
            </p>
            <div className="quote">
              <span>
                <BiSolidQuoteRight />
              </span>
              <p>
                Actually, people flock from the bordering counties of the state
                just to try a slice of his signature Marinara pizza pie!
              </p>
            </div>

            <Link to="/about">About us</Link>
          </div>
        </div>
      </section>
      <section className="homeTeamSection">
        <div className="teamContainer">
          <h1>Meet Our Team</h1>
          <div className="contextContainer">
            <div className="cardMember" id="card1">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/team-2-1.jpg"></img>
              <h3>Umberto Vincenzo</h3>
              <p>Chef</p>
              <div className="linkMember">
                <Link to="https://twitter.com/" target="_blank">
                  <span>
                    <BiLogoTwitter />
                  </span>
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <span>
                    <BiLogoInstagram />
                  </span>
                </Link>
                <Link
                  to="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                  target="_blank"
                >
                  <span>
                    <AiOutlineGooglePlus />
                  </span>
                </Link>
              </div>
            </div>
            <div className="cardMember" id="card2">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/team-4-1.jpg"></img>
              <h3>Umberto Vincenzo</h3>
              <p>Chef</p>
              <div className="linkMember">
                <Link to="https://twitter.com/" target="_blank">
                  <span>
                    <BiLogoTwitter />
                  </span>
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <span>
                    <BiLogoInstagram />
                  </span>
                </Link>
                <Link
                  to="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                  target="_blank"
                >
                  <span>
                    <AiOutlineGooglePlus />
                  </span>
                </Link>
              </div>
            </div>
            <div className="cardMember" id="card3">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/team-1-1.jpg"></img>
              <h3>Umberto Vincenzo</h3>
              <p>Chef</p>
              <div className="linkMember">
                <Link to="https://twitter.com/" target="_blank">
                  <span>
                    <BiLogoTwitter />
                  </span>
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <span>
                    <BiLogoInstagram />
                  </span>
                </Link>
                <Link
                  to="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                  target="_blank"
                >
                  <span>
                    <AiOutlineGooglePlus />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeReviewsSection">
        <div className="reviewsContainer">
          <div className="title">
            <h2>What people are saying about our restaurant</h2>
            <p>
              Anyone, who visits our place leaves us well fed and in a great
              mood!
            </p>
          </div>
          <div className="reviews">
            <div className="reviewCard">
              <span>
                <BiSolidQuoteRight />
              </span>
              <p>
                l've never tasted a pizza so good before, and this is coming
                from a New York native! With all of the richness of ingredients
                and flavors, their pizzas are a perfect treat!
              </p>
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/bigstock_Business_Group_With_Focus_On_A_7014600.jpg"></img>
              <p className="name">Sam</p>
              <p className="posted">posted on,TripAdvisor</p>
            </div>
            <div className="reviewCard">
              <span>
                <BiSolidQuoteRight />
              </span>
              <p>
                While I was looking for a nice new pizzeria in the town, I've
                found the best one herel. Their pizza variety is ultimate,
                inferior only to how awesome these pizzas taste!
              </p>
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/bigstockphoto_A_Handsome_Professor_Smiling_W_4925873.jpg"></img>
              <p className="name">Sam</p>
              <p className="posted">posted on,TripAdvisor</p>
            </div>
            <div className="reviewCard">
              <span>
                <BiSolidQuoteRight />
              </span>
              <p>
                My kids just love the place, dragging me here time and again for
                a slice of their Spanish pizza. This place hs both an oustanding
                menu and great pricing policy!
              </p>
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/bigstockphoto_A_Happy_Business_Woman_Smiling_5047890.jpg"></img>
              <p className="name">Sam</p>
              <p className="posted">posted on,TripAdvisor</p>
            </div>
          </div>
        </div>
      </section>
      <section className="homeRecommendsSection">
        <div className="recommendsContainer">
          <h2>Chef Recommends</h2>
          <div className="cardsContainer">
            <CardComponent />
          </div>
        </div>
      </section>
      <section className="homeOrderSection">
        <div className="orderContainer">
          <div className="context">
            <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image52.jpg"></img>
            <div className="textOrder">
              <h2>Make Your Order! BOOK ONLINE!</h2>
              <p>
                Each person, who will put a table on reserve for this Friday
                night, will be given a 10% discount on all menu items, including
                NA and alcoholic beverages!
              </p>
              <button>
                <Link to="/contacts">BOOK NOW</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
