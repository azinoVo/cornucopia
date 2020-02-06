import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// This will wrap around the Route in application that will require token from the backend

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={() => {
      if (localStorage.getItem('token')) {
        return <Component /> 
      } else {
        return <Redirect to="/home" />
      }
  }} />
}

export default PrivateRoute;