import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex items-center justify-center flex-1 mt-[80px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-[25px] flex justify-center mt-10">
          Register your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <p className="text-accent font-semibold text-center">
              Already have an account?
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
