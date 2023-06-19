import React from 'react'
import {Redirect, Route} from "react-router-dom";
import MovieForm from "../movieForm";
import auth from "../../services/authService";

export const ProtectedRoute = ({path, component: Component, render, ...rest}) => {
    return (
        <Route {...rest}
               render={props => {
                   if(!auth.getCurrentUser()) return <Redirect to={{
                       pathname: '/login',
                       state: { from: props.location }
                       // the location object represent the current location before we redirect the user to the login page
                   }} />;
                   return Component ? <Component {...props} /> : render(props);
               }}
        />
    );
};

export default ProtectedRoute;
