import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layout/Main";
import LoginPage from "../layout/Auth/LoginPage";
import { Link as RouterLink } from "react-router-dom";
import RegisterPage from "../layout/Auth/RegisterPage";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <MainLayout/>
      ),
      children: [
        { element: <HomePage />, index: true }
      ],
    },
    { path: "/auth/login", element: (<LoginPage/>) },
    { path: "/auth/register", element: (<RegisterPage/>) },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

const HomePage = Loadable(lazy(() => import("../pages/Home")));