import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export function BreadCrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Link className="breadCrumbText" to={currentLink} key={crumb}>
          <IoIosArrowForward /> {crumb}
        </Link>
      );
    });
  return (
    <>
      <div className="breadCrumbs">
        <Link className="breadcrumbMain" to="/home">
          Home
        </Link>
        {crumbs}
      </div>
    </>
  );
}
