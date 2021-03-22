import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import Auth from "./pages/auth/Auth";

import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import AddProduct from "./pages/products/AddProduct";
import HomePage from "./pages/dashboard/Dashboard";
import CreateInvoice from "./pages/invoices/CreateInvoice";
import Footer from "./components/footer/Footer";
import { loginUser } from "./redux/actions/authActions";

import "./App.scss";
import { connect } from "react-redux";

const App = ({ userLoggedIn, loginUser }) => {
  useEffect(() => {
    const logIn = JSON.parse(localStorage.getItem("loggedIn"));
    console.log(logIn);
    if (logIn.isLoggedIn) loginUser(logIn.user);
  });

  return (
    <div id="page">
      <div id="body">
        <Header />
        <div id="main-content">
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                userLoggedIn ? <HomePage /> : <Redirect to="/signin" />
              }
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/signin"
              render={() => (userLoggedIn ? <Redirect to="/" /> : <Auth />)}
            />
          </Switch>
          {/* <Switch>
            <Route exact path="/signup" component={Auth} />
          </Switch> */}
          <Switch>
            <Route
              exact
              path="/products/add"
              render={() =>
                userLoggedIn ? <AddProduct /> : <Redirect to="/signin" />
              }
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/invoices/create"
              render={() =>
                userLoggedIn ? <CreateInvoice /> : <Redirect to="/signin" />
              }
            />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { loginUser })(withRouter(App));
