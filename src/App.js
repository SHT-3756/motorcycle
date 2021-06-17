// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage";
import WishList from "./pages/WishList";
import Product from "./pages/Product";
// import All from './pages/All';s
import Join from './pages/Join';
import Login from './pages/Login';
// import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ background:'royalblue', height: '500px' }}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/myPage" component={MyPage} />
          <Route exact path="/wishList" component={WishList} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/prouct/:detail" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
