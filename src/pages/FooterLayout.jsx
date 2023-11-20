import { ScrollRestoration, Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { Terms } from "../components/homeComponents/Terms";
import { Privacy } from "../components/homeComponents/Privacy";

export function FooterLayout() {
  return (
    <>
      <div className="footer">
        <div className="rowFooter">
          <div className="containerAbout">
            <h2>About us</h2>
            <p>
              Visit our restaurant to experience our relaxing atmosphere, to
              find a peace of mind and to enjoy our diverse, delicious, gourmet
              menu. Our extensive choice of side and main dishes and appetizers,
              as well as NA and alcoholic beverages are made to make your taste
              buds happy!
            </p>
          </div>
          <div className="containerContacts">
            <h2>Contact us</h2>
            <div className="address">
              <span>
                <CiLocationOn />
              </span>
              <p className="adress">6087 Richmond hwy, Alexandria, VA</p>
            </div>
            <div className="phone">
              <span>
                <BsTelephoneForward />
              </span>
              <Link to="/home">703 329 0632</Link>
            </div>
            <div className="schedule">
              <span>
                <BiTimeFive />
              </span>
              <p className="schedule">Mo-Fr 11:00-00:00, Sa-Sa 15:00-00:00</p>
            </div>
            <div className="email">
              <span>
                <AiOutlineMail />
              </span>
              <Link to="info.demolink.org">info.demolink.org</Link>
            </div>
            <div className="conditions">
              <Link to="/terms">Terms of Service</Link>
              <Link to="/policy">Privacy Policy</Link>
            </div>
          </div>
          <div className="containerInstagram">
            <div className="container">
              <h2>Instagram</h2>
              <div className="instagramPictures">
                <Link
                  to="https://www.instagram.com/p/B4oUgPIgf2u/?hl=en"
                  target="_blank"
                >
                  <img src="https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </Link>
                <Link
                  to="https://www.instagram.com/p/B4oUgPIgf2u/?hl=en"
                  target="_blank"
                >
                  <img src="https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </Link>
                <Link
                  to="https://www.instagram.com/p/B4oUgPIgf2u/?hl=en"
                  target="_blank"
                >
                  <img src="https://images.pexels.com/photos/7172067/pexels-photo-7172067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </Link>
                <Link
                  to="https://www.instagram.com/p/B4oUgPIgf2u/?hl=en"
                  target="_blank"
                >
                  <img src="https://images.pexels.com/photos/7902939/pexels-photo-7902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </Link>
                <Link
                  to="https://www.instagram.com/p/B4oUgPIgf2u/?hl=en"
                  target="_blank"
                >
                  <img src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </Link>
                <Link
                  to="https://www.instagram.com/p/B4oUgPIgf2u/?hl=en"
                  target="_blank"
                >
                  <img src="https://images.pexels.com/photos/10836977/pexels-photo-10836977.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
}
