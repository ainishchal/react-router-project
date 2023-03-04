import { useEffect, useState } from "react";
import { jsonify, Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);

  async function fetchPosts() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json), setLoader(false));
  }

  return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1> Posts </h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Posts
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        {loader ? (
          <div className="text-center">Loadeing..</div>
        ) : (
          <div className="row">
            {posts.map((post) => {
              return (
                <div className="col-sm-6" key={post.id}>
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title">{post.title}</h1>
                      <p className="card-title">{post.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Posts;
