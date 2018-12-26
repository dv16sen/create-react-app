const fs = require("fs");

const decapitalizeFirstLetter = (string = "") => {
    let firstLetter = string.charAt(0).toLowerCase();
    let restOfString = string.substring(1, string.length);
    return `${firstLetter}${restOfString}`;
};

const getRouterFile = (pages) => (
`import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
${pages.map((page, i) => {
        const lastPage = i === pages.length - 1;

        return `import {${page.split(".js")[0]}} from "./pages/${page.split(".js")[0]}";${
            lastPage ? "" : "\n"
            }`;
    }).reduce((acc, next) => acc + next)}
import {routes} from "./utils/constants/routes";

export const Router = () => (
    <BrowserRouter>
        <Fragment>
${pages.map((page, i) => {
        const path = `routes.${decapitalizeFirstLetter(page).split(".js")[0]}`;
        const component = page.split(".js")[0];
        const lastPage = i === pages.length - 1;
        return `            <Route exact path={${path}} component={${component}}/>${
            lastPage ? "" : "\n"
            }`;
    }).reduce((acc, next) => acc + next)}
        </Fragment>
    </BrowserRouter>
);`
);

const getRoutesFile = (pages) => (
    `export const routes = {
${pages.map((page, i) => {
        if(page === "HomePage.js") return `    homePage: "/",\n`;

        const isLastPage = i === pages.length - 1;
        const key = decapitalizeFirstLetter(page).split(".js")[0];
        const value = `/${key.split("Page")[0]}`;
        return `    ${key}: "${value}"${isLastPage ? "" : ",\n"}`;
    }).reduce((acc, next) => acc + next)}
};`);

module.exports = async () => {
    const root = `${__dirname}/..`;
    const pages = fs.readdirSync(`${root}/src/pages`);

    return new Promise(resolve => {
        fs.writeFile(`${root}/src/utils/constants/routes.js`, getRoutesFile(pages), (err) => {
            if(err) throw err;
            console.log("routes.js updated!");
            resolve();
        })
    }).then(() => new Promise(resolve => {
        fs.writeFile(`${root}/src/Router.js`, getRouterFile(pages), (err) => {
            if(err) throw err;
            console.log("Router.js updated!");
            resolve();
        })
    }));
};