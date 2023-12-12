import React, { useState, createContext, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import { SearchResultList } from "./SearchResultList";

export const CleanFetchResultContext = createContext();

export function AsideBlog({ blogs }) {
  //search bar logic
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        const results = data.filter((blog) => {
          return (
            value &&
            blog &&
            blog.header &&
            blog.header.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };
  const cleanInput = () => {
    setSearch("");
    fetchData("");
  };
  const handleChange = (value) => {
    setSearch(value);
    fetchData(value);
  };

  return (
    <CleanFetchResultContext.Provider
      value={{
        setResults,
        setSearch,
        search,
        results,
        cleanInput,
        fetchData,
        handleChange,
      }}
    >
      <aside className="secondary">
        <aside className="searchTwo">
          <SearchForm />
          <SearchResultList />
        </aside>
        <aside className="recentPosts">
          <h4 className="widgetTitle">RECENT POSTS</h4>
          <ul>
            <li>
              <Link to="/">Non-Meat Pizza with Shrimps and Asparagus!</Link>
            </li>
            <li>
              <Link to="/">Grilled Cheese Pizza Recipe</Link>
            </li>
            <li>
              <Link to="/">Cooking Some Mini Non-Kneading Pizzas</Link>
            </li>
          </ul>
        </aside>
        <aside className="archivesTwo">
          <h4 className="widgetTitle">ARCHIVES</h4>

          <ul>
            {blogs &&
              blogs.map((item, index) => {
                return (
                  <li>
                    <Link key={index} to={`/blog/archive/${item.archive}`}>
                      {item.archive}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </aside>
        <aside className="categoriesTwo">
          <h4 className="widgetTitle">CATEGORIES</h4>
          <ul>
            <li>
              <Link to="/">Oven Pizza</Link>
            </li>
          </ul>
        </aside>
      </aside>{" "}
    </CleanFetchResultContext.Provider>
  );
}
