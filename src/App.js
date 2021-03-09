import Header from "./components/Header/Header";
import Auth from "./pages/auth/Auth";

import { Switch, Route } from "react-router-dom";
import AddProduct from "./pages/products/AddProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/auth" component={Auth} />
        </Switch>
        <Switch>
          <Route exact path="/products/add" component={AddProduct} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
