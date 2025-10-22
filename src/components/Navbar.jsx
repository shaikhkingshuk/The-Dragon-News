import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("you're logged out...");
      })
      .catch((error) => {
        alert({ error });
      });
  };

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
        {user ? (
          <button
            className="btn bg-primary text-base-100"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-7">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
