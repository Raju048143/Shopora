import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {Header, Footer} from "./components";

import { CartProvider } from "./Context/CartProvider"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Header />
        <App />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
