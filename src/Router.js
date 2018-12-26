import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {routes} from "./utils/constants/routes";

export const Router = () => (
    <BrowserRouter>
        <Fragment>
            <Route exact path={routes.homePage} component={HomePage}/>
        </Fragment>
    </BrowserRouter>
);