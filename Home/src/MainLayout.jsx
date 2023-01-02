import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "Home/Header";
import Footer from "Home/Footer";
//import PDPContent from "Pnp/PDPContent";
import HomeContent from "Home/HomeContent";
//import CartContent from "Cart/CartContent";
//import HomeContent from "./HomeContent.jsx";

function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
          <div className="my-10">
              {/* <HomeContent/> */}
              {/* <HomeContent/> */}
          {/* <Switch> */}
            {/* <Route exact path="/" component={HomeContent} /> */}
          {/* <Route path="/product/:id" component={PDPContent} /> */}
            {/* <Route path="/cart" component={CartContent} /> */}
                  {/* </Switch> */}
        </div>
        <Footer />
      </div>
</Router>
  );
}

export default MainLayout;
