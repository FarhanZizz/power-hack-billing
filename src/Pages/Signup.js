import React from "react";
import { MdEmail, MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div>
        <h1 className="font-bold text-3xl text-center mb-10">SIGNUP</h1>
        <div className="form-control my-3">
          <label className="label">
            <span className="label-text">Enter Email</span>
          </label>
          <label className="input-group">
            <span className="bg-primary ">
              <MdEmail size={20} />
            </span>

            <input
              type="text"
              placeholder="Email"
              className="input input-bordered focus:outline-none"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Password</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered focus:outline-none"
            />
            <span className="bg-primary">
              <MdPassword size={20} />
            </span>
          </label>
        </div>
        <p className="text-sm my-4">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login Now
          </Link>
        </p>
        <button className="btn btn-primary w-full font-bold">SIGNUP</button>
      </div>
    </div>
  );
};

export default Signup;
