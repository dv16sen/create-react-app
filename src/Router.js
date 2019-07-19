import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";

export const routes = {
    homePage: "/",

};

export const Router = () => (
    <BrowserRouter>
        <Fragment>
            <Route exact path={routes.homePage} component={HomePage}/>
        </Fragment>
    </BrowserRouter>
);