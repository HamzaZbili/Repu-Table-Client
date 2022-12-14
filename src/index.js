import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserWrapper from "./context/auth/UserWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserWrapper>
        <App />
      </UserWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
