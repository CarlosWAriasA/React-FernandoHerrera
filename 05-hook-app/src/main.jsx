import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </StrictMode>
);
