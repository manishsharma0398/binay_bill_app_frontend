import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="logo">BP & SONS</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/products/add" className="nav-link">
              Add Product
            </Link>
            <Link to="/products" className="nav-link">
              Show Products
            </Link>
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
            <Link to="/" className="nav-link">
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
