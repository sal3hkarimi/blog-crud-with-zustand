import React, { useEffect } from "react";
import { postsStore } from "../../store/postsStore";

const SinglePost = ({ postId }) => {
  const post = postsStore((state) => state.posts.byId[postId]);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
      <figure>
        <img src={post.cover} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};

export default function PostList() {
  const posts = postsStore((state) => state.posts);
  const getPosts = postsStore((state) => state.getApi);

  useEffect(() => {
    if (!posts.length) {
      getPosts();
    }
  }, []);

  const postsEl = posts.allIds.map((postId) => <SinglePost postId={postId} />);

  return <div className="post-list">{postsEl}</div>;
}
