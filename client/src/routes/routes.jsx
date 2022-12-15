import AuthLayout from "components/layouts/authLayout/AuthLayout";
import DashboardLayout from "components/layouts/dashboardLayout/DashboardLayout";
import AdminRoute from "components/routes/AdminRoute";
import Landing from "components/routes/Landing";
import ProtectedRoute from "components/routes/ProtectedRoute";
import Auth from "pages/auth/Auth";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Dashboard from "pages/dashboard/Dashboard";
import NotFound from "pages/notFound/NotFound";
import Profile from "pages/profile/Profile";
import UserManagement from "pages/userManagement/UserManagement";

const routes = () => {
  return [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/authentication",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Auth />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/manage-user",
          element: (
            <ProtectedRoute>
              <AdminRoute>
                <UserManagement />
              </AdminRoute>
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
};

export default routes;
