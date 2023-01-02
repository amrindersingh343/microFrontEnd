 import React from "react";
// import ReactDOM from "react-dom";
// import Footer from "Home/Footer";
// import Header from "Home/Header";
// import "./index.scss";
// import CartContent from "./CartContent";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import Layout from "Home/Layout";


// const App = () => (
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//     <Header />
//     <CartContent/>
//     <Footer/>
//   </div>
// );
ReactDOM.render(<BrowserRouter><Layout /></BrowserRouter>, document.getElementById("app"));
