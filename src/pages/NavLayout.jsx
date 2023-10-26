import {
  Link,
  Outlet,
  ScrollRestoration,
  NavLink,
  useLocation,
} from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { UserAccaunt } from "../authentification/context/UserAccaunt";
import { useAuth } from "../authentification/context/AuthContext";
import { useEffect } from "react";

export function NavLayout() {
  const { logoutFn, currentUser } = useAuth();
  const location = useLocation();
  // // set focus to the active link on the page

  return (
    <>
      <div
        className="topNav"
        style={location.pathname === "/home" ? { boxShadow: "none" } : null}
      >
        <div className="containerNavInfo">
          <div className="navAdress">
            <span>
              <CiLocationOn />
            </span>
            <p className="adress">6087 Richmond hwy, Alexandria, VA</p>
          </div>
          <div className="navNumber">
            <span>
              <BsTelephoneForward />
            </span>

            <p className="number">703 329 0632</p>
          </div>
          <div className="navSchedule">
            <span>
              <BiTimeFive />
            </span>
            <p className="schedule">Mo-Fr 11:00-00:00, Sa-Sa 15:00-00:00</p>
          </div>
          <div className="navSocials">
            <Link to="https://www.facebook.com" target="_blank">
              <BiLogoFacebook />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <BiLogoTwitter />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <BiLogoInstagram />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
        <div
          className="containerNavpages"
          style={
            location.pathname === "/home"
              ? { backgroundColor: "transparent" }
              : null
          }
        >
          <div className="pagesNav">
            <h2 className="mainName">
              <Link to="/home">MIA ITTALONNI</Link>
            </h2>
            <ul className="pagesList">
              <li>
                <NavLink to="/home">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li className="toggleDropdown">
                <NavLink to="/gallery">GALLERY</NavLink>
              </li>
              <li>
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">CONTACTS</NavLink>
              </li>
              <li>
                <NavLink to="/shop">SHOP</NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <AiOutlineShoppingCart />
                </NavLink>
              </li>
              <li>
                <NavLink to="/signUp" className="auth">
                  {currentUser ? (
                    <CgProfile
                      className="userAccaunt"
                      style={{ hover: <UserAccaunt /> }}
                    />
                  ) : (
                    <MdOutlineLogin />
                  )}
                </NavLink>
              </li>
              {currentUser ? (
                <button
                  className="signOutBtn"
                  onClick={logoutFn}
                  style={{ display: "block" }}
                >
                  Sign-out
                </button>
              ) : (
                <button className="signOutBtn" style={{ display: "none" }}>
                  Sign-out
                </button>
              )}
            </ul>
          </div>
        </div>
        <div
          className="containerLinks"
          style={location.pathname === "/home" ? { display: "none" } : null}
        >
          <Link className="home" to="/home">
            Home
          </Link>
          <span>/</span>
          <Link className="rout" to="/home">
            Some page
          </Link>
        </div>
      </div>

      <ScrollRestoration />
      <Outlet />
    </>
  );
}
