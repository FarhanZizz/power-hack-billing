import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AmountContext } from "../AmountProvider";

const Navbar = () => {
  const { amount } = useContext(AmountContext);
  const [accesstoken, setAccesstoken] = useState(
    localStorage.getItem("accessToken")
  );

  useEffect(() => {
    setAccesstoken(localStorage.getItem("accessToken"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
    setAccesstoken(null);
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {accesstoken ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Power Hack
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {accesstoken ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {accesstoken && (
          <p className="normal-case text-xl">Paid Total: {amount}$</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
