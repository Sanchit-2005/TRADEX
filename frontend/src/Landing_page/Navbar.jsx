import React from "react";
import "../../src/nav.css"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="/logo.png"
            style={{ height: "65px", width: "auto" }}
            alt="TradeX"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/Signup"}>
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/About"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/Product"}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/Pricing"}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/Support"}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
