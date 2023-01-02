import React from "react";
import {
  
  Route } from "react-router-dom";
import Header from "Home/Header";
import Footer from "Home/Footer";
import CartContent from "Cart/CartContent"
 import PDPContent from "Pnp/PDPContent";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import HomeContent from "Home/HomeContent";
export default function Layout() {
  return (
    
    <>
   
        <div className="text-3xl mx-auto max-w-6xl">
                  <Header />  
              <div className="my-10">
              <Route exact path="/"  ><HomeContent/></Route> 
              <Route path="/cart" ><CartContent/></Route>   
              <Route path="/product/:id" ><PDPContent/></Route>   
          </div>          
           <Footer />
              </div>
    </>
  );
}
