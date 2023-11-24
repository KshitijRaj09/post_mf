import { createRoot } from "react-dom/client";
import React from "react";
import Main from "./components/Main";

// Clear the existing HTML content
//document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("post-app"));
console.log('post microfrontend loaded');
root.render(<Main />);
