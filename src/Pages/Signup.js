import React from "react";
import { toast } from "react-hot-toast";
import { MdEmail, MdPassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };

    fetch(`http://localhost:5000/registration`, {
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
          toast.success("Registration Successful");
          localStorage.setItem("accessToken", data.token);
          navigate("/");
          window.location.reload();
        }
      });
  };
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <form onSubmit={handleSignUp}>
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
              name="email"
              required
              type="email"
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
              name="password"
              required
              type="password"
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
        <button type="submit" className="btn btn-primary w-full font-bold">
          SIGNUP
        </button>
      </form>
    </div>
  );
};

export default Signup;
