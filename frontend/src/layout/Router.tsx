import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RequierAuth from "../components/RequierAuth";
import AtlasPage from "../pages/AtlasPage";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import SmartPage from "../pages/SmartPage";
import Layout from "./index";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: (
        <RequierAuth>
          <Auth />
        </RequierAuth>
      ),
    },
    {
      path: "/",
      element: (
        <RequierAuth>
          <Layout />
        </RequierAuth>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/atlas",
          element: <AtlasPage />,
        },
        {
          path: "/smart",
          element: <SmartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
