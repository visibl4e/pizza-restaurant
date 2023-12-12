import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { AsideBlog } from "./AsideBlog";
export const BlogDescription = () => {
  const [blogs, setDescriptionPost] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = "http://localhost:3000/blogs";
      const response = await fetch(url);
      const data = await response.json();
      setDescriptionPost(data);
    }
    fetchBlogs();
  }, [blogs]);
  return (
    <>
      <div className="primary">
        <main className="main">
          <div className="postContainer">
            {blogs &&
              blogs.map((blog) => {
                return (
                  <article className="post" id="post" key={blog.id}>
                    <Link key={blog.id} to={`/blog/${blog.id}`}>
                      <h2>{blog.header}</h2>
                    </Link>

                    <header>
                      <h3 className="entryTtile">
                        <Link to="/"></Link>
                      </h3>
                      <div className="entryMeta">
                        <span>
                          By <Link to="/">Admin</Link>
                        </span>
                        <span>
                          In <Link to="/">Category</Link>
                        </span>
                        <span>
                          Posted
                          <time dateTime="2019-04-24T12:47:38+00:00">
                            {blog.data}
                          </time>
                        </span>
                      </div>
                    </header>
                    <figure>
                      <Link to={`/blog/${blog.id}`}>
                        <img src={blog.image}></img>
                      </Link>
                    </figure>
                    <div className="entryContent">
                      <p>{blog.description}</p>
                    </div>
                    <div className="commentRow">
                      <Link className="commentsBtn" to="/">
                        <FaComments /> <span>0</span>
                      </Link>
                      <Link className="infoBtn" to={`/blog/${blog.id}`}>
                        More
                      </Link>
                    </div>
                  </article>
                );
              })}
          </div>
        </main>
      </div>{" "}
      <AsideBlog blogs={blogs} />
    </>
  );
};
