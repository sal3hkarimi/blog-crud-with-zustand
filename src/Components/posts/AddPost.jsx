import React from "react";

export default function AddPost() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body max-w-2xl mx-auto">
        <h2 className="card-title">Add Post</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Author</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">title post</span>
          </label>
          <input type="text" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">content post</span>
          </label>
          <textarea className="textarea textarea-bordered h-24"></textarea>
        </div>
        <div className="card-actions justify-end mt-3">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}
