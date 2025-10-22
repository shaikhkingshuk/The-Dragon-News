import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex flex-row justify-between items-center">
      <div>{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex flex-row gap-5">
        <img src={userImg}></img>
        <Link to="/auth/login" className="btn btn-primary px-7">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
