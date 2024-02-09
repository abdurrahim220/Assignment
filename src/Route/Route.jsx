import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingMain from "../components/LoadingMain";
import Error from "../pages/Error/Error";
import React, { Suspense } from "react";
import Home from "../pages/Home/Home";
const Main = React.lazy(() => import("../Layout/Main"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense fallback={<LoadingMain />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
