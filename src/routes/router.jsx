import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
