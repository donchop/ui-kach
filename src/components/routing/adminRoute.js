import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AdminRoute = ({
  component: Component,
  auth: { user },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !(user !== null ? user.fullRights : false) ? (
        <Redirect to="/auth" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
});

export default connect(mapStateToProps)(AdminRoute);
