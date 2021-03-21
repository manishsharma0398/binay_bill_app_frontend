import React, { useState } from "react";

import { Link } from "react-router-dom";
import TextInput from "../../components/form/TextInput";

import Axios from "axios";

import "./Auth.scss";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loginToApp = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    try {
      const user = await Axios.post("/api/auth/login", {
        email,
        password,
      });
      const userDetails = await user.data;
      console.log(userDetails);

      props.loginUser(userDetails);
    } catch (error) {
      console.log(error.response);
      if ("email" in error.response.data)
        setEmailError(error.response.data.email);
      if ("password" in error.response.data)
        setPasswordError(error.response.data.password);
    }
  };

  return (
    <div id="auth" className="mt-md-3 mt-lg-5 mx-auto">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                {" "}
                <img
                  src="https://i.imgur.com/uNGdWHi.png"
                  className="image"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={loginToApp} className="card2 card border-0 py-5">
              <TextInput
                id="email"
                label="Username / Email"
                placeholder="Ex - sbinay.4242@gmail.com"
                value={email}
                error={emailError}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextInput
                error={passwordError}
                id="password"
                type="password"
                label="Password"
                placeholder="Your password goes here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="btn btn-blue text-center btn-block"
              >
                Sign In
              </button>

              <div className="row mb-4">
                {/* <div className="custom-control custom-checkbox custom-control-inline">
                  {" "}
                  <input
                    id="chk1"
                    type="checkbox"
                    name="chk"
                    className="custom-control-input"
                  />{" "}
                  <label
                    htmlFor="chk1"
                    className="custom-control-label text-sm"
                  >
                    Remember me
                  </label>{" "}
                </div>{" "} */}
                <Link to="#" className="ml-auto mb-0 text-sm p-0">
                  Forgot Password?
                </Link>
              </div>

              <div className="row mb-4">
                {" "}
                <small className="font-weight-bold p-0">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-danger ">
                    Register
                  </Link>
                </small>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { loginUser })(Auth);
