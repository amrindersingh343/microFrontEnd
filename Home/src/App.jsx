import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Footer from "./Footer";
// import Header from "./Header";
// import HomeContent from "./HomeContent";
import MainLayout from "Home/MainLayout";

import "./index.scss";
import Layout from "Home/Layout";

// const App = () => (
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//       <Header />
//     <div className="my-10">
//       <HomeContent/>
//       </div>
//       <Footer />
//     </div>
// );
ReactDOM.render(<BrowserRouter><Layout/></BrowserRouter>, document.getElementById("app"));
