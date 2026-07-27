import { lazy } from "react";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const LoginLayout = lazy(() => import("../layouts/LoginLayout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const routes = [
  {
    path: "/",
    element: LoginPage,
    layout: LoginLayout,
    private: false,
  },
  {
    path: "/home",
    element: HomePage,
    layout: MainLayout,
    private: true,
  },
  {
    path: "/about",
    element: AboutPage,
    layout: MainLayout,
    private: true,
  },
];

export default routes;
