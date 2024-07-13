import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Post1 from "./Components/Pages/Post/Post1";
import Blog from "./Components/Pages/Blog/Blog";

// Ensure the root element exists in the HTML file
const root = ReactDOM.createRoot(document.getElementById("root"));

// Create a router with defined routes
// const allRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/post1",
//     element: <Post1 />,
//   },
//   {
//     path: "/blog",
//     element: <Blog />,
//   },
// ]);

// Render the application
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={allRoutes} />
  // </React.StrictMode>

  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// Measure web vitals for performance, you can modify this as needed
reportWebVitals(console.log);
