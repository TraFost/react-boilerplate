import _React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Notfound } from "@/presentation/pages";
import { privateRoutes, publicRoutes } from "@routes/app-router";
import ProtectedRoutes from "@routes/protected-routes";

export default function RouteProvider() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}

        <Route element={<ProtectedRoutes />}>
          {privateRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
