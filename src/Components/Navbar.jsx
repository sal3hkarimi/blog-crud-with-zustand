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
      </div>
    </div>
  );
};

export default Navbar;
