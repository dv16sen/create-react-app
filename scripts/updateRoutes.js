const fs = require("fs");
const {joinStrings, decapitalizeFirstLetter} = require("./utils");

const toImports = (pages) => pages.map((page, i) => {
    const lastPage = i === pages.length - 1;

    return `import {${page.split(".js")[0]}} from "./pages/${page.split(".js")[0]}";${lastPage ? "" : "\n"}`;
}).reduce(joinStrings);

const toRouteConstants = (pages) => pages.map((page, i) => {
    if(page === "HomePage.js") return `    homePage: "/",\n`;

    const isLastPage = i === pages.length - 1;
    const key = decapitalizeFirstLetter(page).split(".js")[0];
    const value = `/${key.split("Page")[0]}`;
    return `    ${key}: "${value}"${isLastPage ? "" : ",\n"}`;
}).reduce(joinStrings);

const toRouteComponents = (pages) => pages.map((page, i) => {
    const path = `routes.${decapitalizeFirstLetter(page).split(".js")[0]}`;
    const component = page.split(".js")[0];
    const lastPage = i === pages.length - 1;
    return `            <Route exact path={${path}} component={${component}}/>${
        lastPage ? "" : "\n"
        }`;
}).reduce(joinStrings);

const getRouterFile = (pages) => (
`import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
${toImports(pages)}

export const routes = {
${toRouteConstants(pages)}
};

export const Router = () => (
    <BrowserRouter>
        <Fragment>
${toRouteComponents(pages)}
        </Fragment>
    </BrowserRouter>
);`
);

const root = `${__dirname}/..`;
const pages = fs.readdirSync(`${root}/src/pages`);

fs.writeFile(`${root}/src/Router.js`, getRouterFile(pages), (err) => {
    if(err) throw err;
    console.log("Router.js updated!");
});