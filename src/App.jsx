import React from "react";
import Body from "./component/Body";
import { createBrowserRouter, Outlet } from "react-router";
import Pricing from "./component/Pricing";
import Header from "./component/Header";
import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
        <Login />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

export default App;
