import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  if(authenticated === undefined){
    return ""
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return authenticated ? (
          <React.Fragment>
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};

export default UnauthenticatedRoute;
