import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../utils";

function PrivateComponent({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(routeData) =>
                isLoggedIn() ? (
                    <Component {...rest} {...routeData} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

export default PrivateComponent;
