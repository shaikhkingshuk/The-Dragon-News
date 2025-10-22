import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center flex-1 mt-[80px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-[25px] flex justify-center mt-10">
          Login your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <p className="text-accent font-semibold text-center">
              Don't have an account?
              <Link to="/auth/register" className="text-secondary">
                Register
              </Link>
            </p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
