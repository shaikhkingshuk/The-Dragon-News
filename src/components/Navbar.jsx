import React from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div></div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex flex-row gap-5">
        <img src={user}></img>
        <Link to="/auth/login" className="btn btn-primary px-7">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
