import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "tippy.js/dist/tippy.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
