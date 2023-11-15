// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AsideBlog } from "./AsideBlog";
export function Post() {
  const [blogPage, setBlogPage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:3000/blogs/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setBlogPage(data);
    }
    fetchBlogs();
  }, [id]);

  return (
    <>
      <div className="blogContentWrapContainer">
        <div className="rowBlog">
          <div className="primary">
            <main className="main">
              <div className="postContainer">
                {blogPage && (
                  <article className="post" id="id">
                    <header>
                      <h3 className="entryTtile">
                        <Link className="postTitle" to="/blog">
                          {blogPage.header}
                        </Link>
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
                          <time datetime="2019-04-24T12:47:38+00:00">
                            {blogPage.data}
                          </time>
                        </span>
                      </div>
                    </header>

                    <figure>
                      <Link to={`/blog`}>
                        <img src={blogPage.imageFirst} />
                      </Link>
                    </figure>
                    <div className="entryContent">
                      <p>{blogPage.descriptionFirst}</p>
                      <img src={blogPage.imageSecond} />

                      <p>{blogPage.descriptionSecond}</p>
                      <img src={blogPage.imageThird} />
                      <p>{blogPage.descriptionThird}</p>
                      <div className="ingredients">
                        <h3 className="entryHeader">INGREDIENTS</h3>
                        <ul>
                          {blogPage.ingredients.map((item) => {
                            return <li>{item}</li>;
                          })}
                        </ul>
                      </div>
                      <div className="recipe"></div>
                    </div>
                  </article>
                )}
              </div>
            </main>
          </div>
          <AsideBlog />
        </div>
      </div>
    </>
  );
}
