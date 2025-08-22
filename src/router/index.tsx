import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { getBasename } from "@ice/stark-app";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Settings from "../pages/Settings";
import CrmDashboard from "../pages/crm-overview";
import GridAdmin from "../pages/grid-admin";
import Customer360Display from "../pages/360-customer/Customer360Display";
import Customer360Config from "../pages/360-customer/ConfigLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="portal" replace />,
        },
        {
          path: "portal",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "crm-dashboard",
          element: <CrmDashboard />,
        },
        {
          path: "grid-admin",
          element: <GridAdmin />,
        },
        {
          path: "customer360",
          element: <Customer360Display />,
        },
        {
          path: "customer360/config",
          element: <Customer360Config />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ],
  {
    basename: getBasename() || "/",
  }
);

console.log("MicroAppRouter:", {
  routes: router.routes,
  basename: router.basename,
});

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
