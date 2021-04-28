import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const Authenticated = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user.authUser);

  return (
    <Route
      {...rest}
      render={(props) => {
        return user.isLoggedIn ? (
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

export default Authenticated;
