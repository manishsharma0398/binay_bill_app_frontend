import Header from "./components/Header/Header";
import Auth from "./pages/auth/Auth";

import { Switch, Route, withRouter } from "react-router-dom";
import AddProduct from "./pages/products/AddProduct";
import HomePage from "./pages/home/HomePage";
import CreateInvoice from "./pages/invoices/CreateInvoice";
import Footer from "./components/footer/Footer";

import "./App.scss";

const App = (location) => {
  return (
    <div id="page">
      <div id="body">
        <Header />
        <div id="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Switch>
            <Route exact path="/signin" component={Auth} />
          </Switch>
          <Switch>
            <Route exact path="/signup" component={Auth} />
          </Switch>
          <Switch>
            <Route exact path="/products/add" component={AddProduct} />
          </Switch>
          <Switch>
            <Route exact path="/invoices/create" component={CreateInvoice} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(App);
