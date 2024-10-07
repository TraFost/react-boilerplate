export enum RoutePath {
  HOME = "/",
  LOGIN = "/login",
}

const createRoute = (path: RoutePath, component: JSX.Element) => ({
  path,
  component,
});

export const privateRoutes = [createRoute(RoutePath.HOME, <div>Homwe</div>)];

export const publicRoutes = [createRoute(RoutePath.LOGIN, <div>Login</div>)];
