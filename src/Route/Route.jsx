import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingMain from "../components/LoadingMain";
import Error from "../pages/Error/Error";
import React, { Suspense } from "react";
import Home from "../pages/Home/Home";
import SingleUserDetails from "../pages/AllUserList/SingleUserDetails";
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
      {
        path: "/singleUser/:id",
        element: <SingleUserDetails />,
      },
    ],
  },
]);

export default router;
