import { Form, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { Posts } from "../components/blogComponents/Posts";
import { PostsList } from "../components/blogComponents/PostsLists";
import { useState } from "react";
export function Blog() {
  const [button, setButton] = useState("");

  return (
    <>
      <div className="blogContentWrapContainer">
        <div className="rowBlog">
          <div className="primary">
            <main className="main">
              <PostsList />
            </main>
          </div>
          <aside className="secondary">
            <aside className="searchTwo">
              <Form className="searchForm">
                <label className="label" htmlFor="text">
                  <input
                    type="text"
                    className="input"
                    id="email"
                    placeholder="Enter keyword search..."
                  />
                </label>
                <button
                  type="submit"
                  className="searchBtn"
                  onClick={() => setButton(console.log("click"))}
                >
                  <AiOutlineSearch />
                </button>
              </Form>
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
                <li>
                  <Link to="/">April 2019</Link>
                </li>
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
          </aside>
        </div>
      </div>
    </>
  );
}
