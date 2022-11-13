import AuthLayout from "components/layouts/authLayout/AuthLayout";
import DashboardLayout from "components/layouts/dashboardLayout/DashboardLayout";
import Landing from "components/routes/Landing";
import Auth from "pages/auth/Auth";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Dashboard from "pages/dashboard/Dashboard";

const routes = () => {
  return [
    {
      path: "/",
      pathname: "landing",
      element: <Landing />,
    },
    {
      path: "/authentication",
      pathname: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          pathname: "auth",
          element: <Auth />,
        },
        {
          path: "login",
          pathname: "login",
          element: <Login />,
        },
        {
          path: "register",
          pathname: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      pathname: "dashboard-main",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          pathname: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ];
};

export default routes;
