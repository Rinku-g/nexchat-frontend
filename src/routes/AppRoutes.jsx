import { Suspense, useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routeConfig";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Loader from "../componants/Loader";
import DelayedLoader from "../componants/DelayedLoader";

const EmptyLayout = ({ children }) => <>{children}</>;

const AppRoutes = () => {
  const routing = useRoutes(
    routes.map((route) => {
      const Component = route.element;
      const Layout = route.layout || EmptyLayout;

      return {
        path: route.path,
        element: (
          <Layout>
            {route.private ? (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ) : (
              <PublicRoute>
                <Component />
              </PublicRoute>
            )}
          </Layout>
        ),
      };
    }),
  );

  return <Suspense fallback={<DelayedLoader />}>{routing}</Suspense>;
};

export default AppRoutes;
