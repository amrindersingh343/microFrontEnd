import React from "react";
import ReactDOM from "react-dom";
import PDPContent from "./PDPContent.jsx";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import Layout from "Home/Layout";


// const App = () => (
  
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//       <Header />
//       <div className="my-10">
//       <PDPContent/>
//         {/* <Switch>
//           <Route path="product/id" component={PDPContent} />
//       </Switch> */}
//       </div>
//       <Footer />
//     </div>
 
// );
ReactDOM.render(<BrowserRouter><Layout /></BrowserRouter>, document.getElementById("app"));
