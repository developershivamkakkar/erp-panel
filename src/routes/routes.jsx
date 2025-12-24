import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import TenantLogin from "../pages/TenantLogin";
import TenantLogout from "../components/TenantLogout";
import AuthRoute from "../components/AuthRoute";
import SchoolSessionPage from "../pages/SchoolSessionPage";
import SchoolBoardPage from "../pages/SchoolBoardPage";

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
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        ),
      },
      {
        path: "/manage-sessions",
        element: (
          <AuthRoute>
            <SchoolSessionPage />
          </AuthRoute>
        ),
      },
      {
        path: "/manage-boards",
        element: (
          <AuthRoute>
            <SchoolBoardPage />
          </AuthRoute>
        ),
      },
    ],
  },
]);
