import React, { useRef, useState } from "react";
import { postsStore } from "../../store/postsStore";
import { usersStore } from "../../store/usersStore";
import { useNavigate } from "react-router-dom";
import getUsers from "./getUsers";




export default function AddPost() {
  const [title, setTitle] = useState("");
  const [bodyPost, setBodyPost] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const addPostToApi = postsStore((state) => state.addPost);
  const users = usersStore((state) => state.users);

  const usersOptEl = users.allIds.map((userId) => (
    <option key={userId} value={userId}>
      {users.byId[userId].fullName}
    </option>
  ));

  let canSubmit = false;
  if (title && bodyPost && author) {
    canSubmit = true;
  }

  const addNewPost = async () => {
    const response = await addPostToApi({
      title,
      body: bodyPost,
      author,
    });
    if (response.statusText === "Created") {
      setTitle("");
      setBodyPost("");
      setAuthor("");
      navigate("/posts");
    }
  };

  getUsers();

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body max-w-2xl mx-auto">
        <h2 className="card-title">Add Post</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Author</span>
          </label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="select select-bordered"
          >
            <option value=""></option>
            {usersOptEl}
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">title post</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">content post</span>
          </label>
          <textarea
            value={bodyPost}
            onChange={(e) => setBodyPost(e.target.value)}
            className="textarea textarea-bordered h-24"
          ></textarea>
        </div>
        <div className="card-actions justify-end mt-3">
          <button
            disabled={!canSubmit}
            onClick={addNewPost}
            className="btn btn-primary"
          >
            Add New Post
          </button>
        </div>
      </div>
    </div>
  );
}
