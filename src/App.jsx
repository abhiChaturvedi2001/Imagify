import React from "react";
import Body from "./component/Body";
import { createBrowserRouter, Outlet } from "react-router";
import Pricing from "./component/Pricing";
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
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
]);

export default App;
