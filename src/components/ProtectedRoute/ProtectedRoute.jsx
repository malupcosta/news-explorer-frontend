import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
  component: Component,
  loggedIn,
  isCheckingAuth,
  ...props
}) {
  return (
    <Route
      {...props}
      render={(routeProps) => {
        if (isCheckingAuth) {
          return null;
        }

        return loggedIn ? (
          <Component {...routeProps} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { openLoginPopup: true },
            }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;
