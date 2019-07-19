import React from "react";
import {mountComponents, withStore} from "./index";
import {render} from "@testing-library/react";

describe("Mount and propType tests", () => {
    it("/pages", () => {
        mountComponents("/pages/**/**/*.js", {
            renderer: (Component, props) => render(withStore(<Component {...props}/>))
        });
    });
});