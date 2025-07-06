import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CounterApp from "./components/CounterApp";
import "./components/styles.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <CounterApp value={6} />
  </React.StrictMode>
);
