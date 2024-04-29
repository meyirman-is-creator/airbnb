import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layout/Main";
import LoginPage from "../layout/Auth/LoginPage";
import { Link as RouterLink } from "react-router-dom";
import RegisterPage from "../layout/Auth/RegisterPage";
import AccountModules from "../layout/Profile/AccountModules";
import ProfilePage from "../layout/Profile/ProfilePage";
import OrdersPage from "../layout/Profile/OrdersPage";
import FavoritesPage from "../layout/Profile/FavoritesPage";
import DetailsPage from "../layout/DetailPage";
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
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
    { path: "/auth/login", element: <LoginPage /> },
    { path: "/auth/register", element: <RegisterPage /> },
    {
      path: "/personal", // Исправленный путь
      
      children: [
        {index: true, element: <AccountModules />,},
        { path: "profile", element: <ProfilePage /> },
        {path:'orders', element:<OrdersPage/>},
        {path:'favorites', element:<FavoritesPage/>} // Добавленный префикс "profile"
      ],
    },
    {path:'/detail',element: <DetailsPage/>},
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

const HomePage = Loadable(lazy(() => import("../pages/Home")));
