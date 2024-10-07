export enum RoutePath {
  HOME = "/",
  LOGIN = "/login",
}

const createRoute = (path: RoutePath, component: JSX.Element) => ({
  path,
  component,
});

const privateRoutes = [createRoute(RoutePath.HOME, <div>Homwe</div>)];

const publicRoutes = [createRoute(RoutePath.LOGIN, <div>Login</div>)];

export { privateRoutes, publicRoutes };
