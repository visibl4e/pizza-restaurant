import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { useEffect, useState } from "react";
import { db, storage } from "../../firebase/firebase";
import { getDocs, collection, setDoc, doc } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
export function PostsList() {
  const [posts, setPosts] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const collectionRef = collection(db, "posts");
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    const listOfImage = () => {
      listAll(imageListRef).then((response) => {
        response.items.map((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrl(url);
            console.log(url);
          });
        });
      });
    };
    const getPostsList = async () => {
      try {
        const data = await getDocs(collectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        // const postRef = filteredData.doc(`posts/${userauth.uid}`);
        // await postRef.update({
        //   photoUrl: imageUrl,
        // });
        setPosts(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getPostsList();
    listOfImage();
  }, []);
  // useEffect(() => {
  //   const getFileUrl = async () => {
  //     const storageRef = ref(storage, "images/mainImage1.jpg");
  //     await getDownloadURL(storageRef).then((url) => {
  //       setImageUrl(url);
  //       console.log(url);
  //     });
  //   };
  //   getFileUrl();
  // }, []);

  return (
    <>
      <div className="postContainer">
        {posts.map((p) => {
          return (
            <>
              <article key={p.id} className="post" id="post">
                <header>
                  <h3 className="entryTtile">
                    <Link to="/">{p.name}</Link>
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
                        April 24, 2019
                      </time>
                    </span>
                  </div>
                </header>
                <figure>
                  <Link to="/">{p.imagePostOne}</Link>
                </figure>
                <div className="entryContent">
                  <p>{p.age}</p>
                </div>
                <div className="commentRow">
                  <Link className="commentsBtn" to="/">
                    <FaComments /> <span>0</span>
                  </Link>
                  <Link className="infoBtn" to="/">
                    More
                  </Link>
                </div>
              </article>
              {/* {imageList.map((url) => {
                return <img src={url} />;
              })} */}
            </>
          );
        })}
      </div>
    </>
  );
}
