import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>This is home page</h1>,
  },
  {
    path: "/auth",
    element: <h1>This is authentication page</h1>,
  },
  {
    path: "/news",
    element: <h1>This is news page</h1>,
  },
]);

export default router;
