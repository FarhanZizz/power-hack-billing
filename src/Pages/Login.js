import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div>
        <h1 className="font-bold text-3xl text-center mb-10">LOGIN</h1>
        <div className="form-control my-3">
          <label className="label">
            <span className="label-text">Enter Email</span>
          </label>
          <label className="input-group">
            <span className="bg-primary">BTC</span>

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
            <span className="bg-primary">BTC</span>
          </label>
        </div>
        <p className="text-sm my-4">
          Don't have an account?{" "}
          <Link to="/signup" className="link link-primary">
            Signup Now
          </Link>
        </p>
        <button className="btn btn-primary w-full font-bold">LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
