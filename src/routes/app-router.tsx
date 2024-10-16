import { Home, Login } from "@/presentation/pages";

export enum RoutePath {
  HOME = "/",
  LOGIN = "/login",
}

const createRoute = (path: RoutePath, component: JSX.Element) => ({
  path,
  component,
});

export const privateRoutes = [createRoute(RoutePath.HOME, <Home />)];

export const publicRoutes = [createRoute(RoutePath.LOGIN, <Login />)];
