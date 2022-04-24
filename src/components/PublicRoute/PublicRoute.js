import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./PublicRoute.css";

export const PublicRoute = ({
  isLoggedIn,
  path,
  exact = false,
  children: Component,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        if (!isLoggedIn) return Component;
        return <Redirect to="/" />;
      }}
    />
  );
};
