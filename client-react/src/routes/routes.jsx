import Auth from "pages/auth/Auth";
import AuthLayout from "../components/layouts/auth/AuthLayout";
import DashboardLayout from "../components/layouts/dashboard/DashboardLayout";
import Landing from "../components/routes/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";

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
      ],
    },
  ];
};

export default routes;
