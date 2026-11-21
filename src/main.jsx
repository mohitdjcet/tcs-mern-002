import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Home from "./page/home.jsx";
import About from "./page/About.jsx";
import Users from "./page/Users.jsx";
import NotFound from "./page/NotFound.jsx";
import Login from "./page/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout Comp
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "users/:id", element: <Users /> }, // Dynamic Route
      { path: "login", element: <Login /> },
      { path:"old-home",element:<Navigate to ="/" replace />},
      { path: "*", element:<NotFound />}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
