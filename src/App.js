import Header from "./components/Header/Header";
import Auth from "./pages/auth/Auth";

import { Switch, Route } from "react-router-dom";
import AddProduct from "./pages/products/AddProduct";
import HomePage from "./pages/home/HomePage";
import CreateInvoice from "./pages/invoices/CreateInvoice";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
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
  );
}

export default App;
