import Header from "./components/Header/Header";
import Auth from "./pages/auth/Auth";

import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import AddProduct from "./pages/products/AddProduct";
import HomePage from "./pages/home/HomePage";
import CreateInvoice from "./pages/invoices/CreateInvoice";
import Footer from "./components/footer/Footer";

import "./App.scss";
import { connect } from "react-redux";

const App = ({ userLoggedIn }) => {
  return (
    <div id="page">
      <div id="body">
        <Header />
        <div id="main-content">
          <Switch>
            <Route
              exact
              path="/dashboard"
              render={() =>
                userLoggedIn ? <HomePage /> : <Redirect to="/signin" />
              }
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/signin"
              render={() =>
                userLoggedIn ? <Redirect to="/dashboard" /> : <Auth />
              }
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
