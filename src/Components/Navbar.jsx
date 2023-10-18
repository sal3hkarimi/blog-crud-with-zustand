import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar bg-neutral-content rounded-lg my-3">
        <div className="navbar-start">
          <ul className="menu menu-horizontal">
            <li>
              <Link to="/posts" className="hover:bg-slate-200 text-lg ">
                <h4>posts</h4>
              </Link>
            </li>
            <li>
              <Link to="/users" className="hover:bg-slate-200 text-lg ">
                users
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center">
          <h3 className="font-bold text-xl">Blog with zustand</h3>
        </div>
        <div className="navbar-end">
          <Link
            to="/add-post"
            className="bg-neutral-content hover:bg-slate-200 border-none btn btn-square"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 lucide lucide-plus"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
