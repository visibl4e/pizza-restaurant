import React, { useEffect, useRef, useState } from "react";

import { useAuth } from "./AuthContext";
import { FaRegUser } from "react-icons/fa";

import { Link } from "react-router-dom";
export function UserAccaunt({ isHovering }) {
  const { logoutFn, currentUser } = useAuth();

  return (
    <>
      {currentUser && (
        <div
          className={`profileContainer ${
            isHovering ? "activeProfileDropDown" : ""
          }`}
        >
          <ul>
            <li>
              <div className="profileBox">
                <h3>Profile</h3>
                <FaRegUser />
              </div>
            </li>

            {currentUser ? <li onClick={logoutFn}> Sign-out</li> : ""}

            <li>{currentUser.email}</li>
            <li>
              <Link to="/terms">Terms of service</Link>
            </li>
            <li>
              <Link to="/policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
