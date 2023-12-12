import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Form } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CleanFetchResultContext } from "./AsideBlog";

export function SearchForm() {
  const { search, cleanInput, handleChange, setSearch, setResults, results } =
    useContext(CleanFetchResultContext);

  return (
    <Form className="searchForm">
      <label className="label" htmlFor="text">
        <input
          type="text"
          className="input"
          placeholder="Search post..."
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
      <button className="clearBtn" onClick={cleanInput}>
        <RxCross2 />
      </button>
    </Form>
  );
}
