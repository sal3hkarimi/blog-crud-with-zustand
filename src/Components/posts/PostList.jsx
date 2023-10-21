import { useNavigate } from "react-router-dom";
import { postsStore } from "../../store/postsStore";
import { useEffect } from "react";

const SinglePost = ({ postId }) => {
  const post = postsStore((state) => state.posts.byId[postId]);
  const deletePost = postsStore((state) => state.deletePost);
  const navigate = useNavigate();

  const removePost = async () => await deletePost(postId);

  const updatePost = () => {
    return navigate(`/edit-post/${postId}`);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
      <figure>
        <img src={post.cover} alt="cover post" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-between">
          <div className="action-api">
            <button
              onClick={removePost}
              className="bg-red-500 hover:bg-red-400 border-none btn btn-square mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash-2 text-white"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </button>
            <button
              onClick={updatePost}
              className="bg-yellow-500 hover:bg-yellow-400 border-none btn btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pencil text-white"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </button>
          </div>
          <div className="view-sec">
            <button className="btn btn-primary px-10">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PostList() {
  const posts = postsStore((state) => state.posts);
  const getPosts = postsStore((state) => state.getApi);

  const postsEl = posts.allIds.map((postId, idx) => (
    <SinglePost postId={postId} key={idx} />
  ));

  useEffect(() => {
    if (!posts.allIds.length) {
      getPosts();
    }
    console.log(posts);
  }, [posts]);

  return <div className="post-list">{postsEl}</div>;
}
