import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemDetail from "./components/pages/ItemDetail.jsx";
import NavbarFooter from "./components/templates/NavbarFooter/index.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarFooter />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/items/:id",
        element: <ItemDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
