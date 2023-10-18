import { postsStore } from "../../store/postsStore";
import getPosts from "./getPosts";

const SinglePost = ({ postId }) => {
  const post = postsStore((state) => state.posts.byId[postId]);
  const deletePost = postsStore((state) => state.deletePost);

  const removePost = async () => {
    const response = await deletePost(postId);
    if (response.statusText === "OK") {
      return window.location.reload();
    }
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
              className="bg-red-500 hover:bg-red-600 border-none btn btn-square mr-2"
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
              onClick={removePost}
              className="bg-lime-500 hover:bg-red-600 border-none btn btn-square"
            >
              
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

  const postsEl = posts.allIds.map((postId, idx) => (
    <SinglePost postId={postId} key={idx} />
  ));

  getPosts();

  return <div className="post-list">{postsEl}</div>;
}
