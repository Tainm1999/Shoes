// import React from "react";
// import Announcement from "./Components/Announcement";
// import Navbar from "./Components/Navbar";
// import Slider from "./Components/Slider";
import Home from "./page/Home";
import Product from "./page/Product";
import ProductList from "./page/ProductList";
import Cart from "./page/Cart";
// import Pay from "./page/Pay";
import Login from "./page/Login";
import Register from "./page/Register";
import Success from "./page/Success";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"

const App = () => {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
          </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;