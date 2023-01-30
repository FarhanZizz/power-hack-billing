import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail, MdPassword } from "react-icons/md";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };
    // validating user info in db and getting access token from server
    fetch(`https://power-hack-billing-server.vercel.app/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error(data.message);
        } else {
          localStorage.setItem("accessToken", data.token);
          navigate("/");
          window.location.reload();
        }
      });
  };
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <form onSubmit={handleLogin}>
        <h1 className="font-bold text-3xl text-center mb-10">LOGIN</h1>
        <div className="form-control my-3">
          <label className="label">
            <span className="label-text">Enter Email</span>
          </label>
          <label className="input-group">
            <span className="bg-primary ">
              <MdEmail size={20} />
            </span>

            <input
              type="email"
              name="email"
              required
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
              type="password"
              name="password"
              required
              placeholder="Password"
              className="input input-bordered focus:outline-none"
            />
            <span className="bg-primary">
              <MdPassword size={20} />
            </span>
          </label>
        </div>
        <p className="text-sm my-4">
          Don't have an account?{" "}
          <Link to="/signup" className="link link-primary">
            Signup Now
          </Link>
        </p>
        <button type="submit" className="btn btn-primary w-full font-bold">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
