import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.scss";
import Demo from "./demo.tsx";
import TreeMenu from "./Tree.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
