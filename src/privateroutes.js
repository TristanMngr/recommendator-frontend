import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, logged, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      logged === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);


const mapStateToProps = state => ({
  logged: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
