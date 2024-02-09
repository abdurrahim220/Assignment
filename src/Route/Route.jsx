import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingMain from "../components/LoadingMain";
import Error from "../pages/Error/Error";
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
  },
]);

export default router;
