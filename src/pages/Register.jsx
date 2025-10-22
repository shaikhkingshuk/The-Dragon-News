import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
  };
  return (
    <div className="flex items-center justify-center flex-1 mt-[80px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-[25px] flex justify-center mt-10">
          Register your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              <p className="text-accent font-semibold text-center">
                Already have an account?
                <Link to="/auth/login" className="text-secondary">
                  Login
                </Link>
              </p>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
