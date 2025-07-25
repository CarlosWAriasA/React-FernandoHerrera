import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TodoApp } from "./08-useReducer/TodoApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
