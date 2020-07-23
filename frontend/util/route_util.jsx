import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Route, HashRouter, Redirect } from 'react-router-dom';

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) , servers: state.entities.servers };
};



const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/channels/@me" />
    }
  />
);


const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);


export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);