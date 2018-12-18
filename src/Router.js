import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {routes} from "./utils/constants/routes";

export const Router = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Route exact path={routes.HomePage} component={HomePage}/>
            </Fragment>
        </BrowserRouter>
    );
};