import React from "react";
import ReactDOM from "react-dom/client"; // React 18+
import "./index.css"; // Global styles
import App from "./App"; // Main App component

// Create a root element to render the React app into
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
