import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Unauthenticated = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user.authUser);

  return (
    <Route
      {...rest}
      render={(props) => {
        return !user.isLoggedIn ? (
          <React.Fragment>
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect to={"/account"} />
        );
      }}
    />
  );
};

export default Unauthenticated;
