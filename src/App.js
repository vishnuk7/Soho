// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/singleProduct" component={SingleProduct} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    </div>
  );
}

export default App;
