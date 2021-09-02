import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./screens/Home";
import { Product } from "./screens/Product";
import { Categories } from "./screens/Categories";
import { Category } from "./screens/Category";
import Auth from "./components/Auth";
import { CartProvider } from "react-use-cart";
import { Cart } from "./screens/Cart";


function App() {
  return (
    <Router>
      <div className="grid-container">
        <Navbar />
        <div className="main">
          <Switch>
            <CartProvider>
              <Route path="/login" component={Auth}></Route>
              <Route path="/product/:id" component={Product}></Route>
              <Route path="/" component={Home} exact></Route>
              <Route path="/category" component={Categories} exact></Route>
              <Route path="/category/:category" component={Category}></Route>
              <Route path="/cart" component={Cart}></Route>
            </CartProvider>
          </Switch>
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
