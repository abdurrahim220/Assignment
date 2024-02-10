import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import SearchProvider from "./provider/SearchProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <React.StrictMode>
      <div className="bg-gray-100">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
    ,
  </SearchProvider>
);
