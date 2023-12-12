import { AsideBlog } from "../components/blogComponents/AsideBlog";
import { BlogDescription } from "../components/blogComponents/BlogDescription";
export function Blog() {
  return (
    <>
      <div className="blogContentWrapContainer">
        <div className="rowBlog">
          <BlogDescription />
        </div>
      </div>
    </>
  );
}
