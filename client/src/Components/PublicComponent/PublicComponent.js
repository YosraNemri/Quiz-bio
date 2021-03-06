import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../utils";

function PublicComponent({ component: Component, restricted, ...rest }) {
    return (
        <Route
            {...rest}
            render={(routeData) =>
                isLoggedIn() && restricted ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...rest} {...routeData} />
                )
            }
        />
    );
}

export default PublicComponent;
