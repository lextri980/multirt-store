import AuthLayout from "components/layouts/authLayout/AuthLayout";
import DashboardLayout from "components/layouts/dashboardLayout/DashboardLayout";
import Landing from "components/routes/Landing";
import Auth from "pages/auth/Auth";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Dashboard from "pages/dashboard/Dashboard";
import NotFound from "pages/notFound/NotFound";
import Profile from "pages/profile/Profile";

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
          element: <Profile />,
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
