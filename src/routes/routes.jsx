import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import TenantLogin from "../pages/TenantLogin";
import TenantLogout from "../components/TenantLogout";
import AuthRoute from "../components/AuthRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TenantLogin />,
  },
  {
    path: "/logout",
    element: <TenantLogout />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <AuthRoute type="protected">
            <Dashboard />
          </AuthRoute>
        ),
      },
    ],
  },
]);
