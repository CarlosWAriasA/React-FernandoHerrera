import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CounterApp from "./components/CounterApp";
import "./components/styles.css";
import FirstApp from "./components/FirstApp";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <CounterApp value={100} />
    {/* <FirstApp title="Hola, soy Goku" /> */}
  </React.StrictMode>
);
