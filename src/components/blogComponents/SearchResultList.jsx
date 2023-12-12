import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CleanFetchResultContext } from "./AsideBlog";
export const SearchResultList = () => {
  const { results, cleanInput } = useContext(CleanFetchResultContext);
  return (
    <>
      <div className="resultList">
        {results.map((item, index) => {
          return (
            <Link
              to={`/blog/${item.id}`}
              className="resultItem"
              key={index}
              onClick={cleanInput}
            >
              {item.header} <br />
            </Link>
          );
        })}
      </div>
    </>
  );
};
