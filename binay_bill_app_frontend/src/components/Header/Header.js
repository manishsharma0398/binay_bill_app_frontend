import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import "./Header.scss";

import { logoutUser } from "../../redux/actions/authActions";

const Header = ({ userLoggedIn, logoutUser }) => {
  const signoutUser = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <nav id="header" className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link to="/dashboard" className="navbar-brand">
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
            {userLoggedIn && (
              <Link to="/dashboard" className="nav-link active">
                Dashboard
              </Link>
            )}
            {userLoggedIn && (
              <Link to="/products/add" className="nav-link">
                Add Product
              </Link>
            )}
            <Link to="/products" className="nav-link">
              Show Products
            </Link>
            {userLoggedIn && (
              <Link onClick={signoutUser} to="/" className="nav-link">
                Log Out
              </Link>
            )}
            {!userLoggedIn && (
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            )}
            {/* {!userLoggedIn && (
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { logoutUser })(Header);
