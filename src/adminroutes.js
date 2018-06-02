import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './privateroutes';
import { connect } from 'react-redux';

const AdminRoute = ({ component: Component, admin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      admin === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);


const mapStateToProps = state => ({
  admin: state.auth.user ? state.auth.user.admin : false
});

export default connect(mapStateToProps)(AdminRoute);
