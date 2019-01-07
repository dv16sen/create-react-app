import React from "react";
import {Page} from "../site-components/views/Page";
import SampleController from "../site-components/controllers/SampleController";
import {SampleView} from "../site-components/views/SampleView";

export const HomePage = () => (
    <Page id="home-page">
        <SampleController>
            <SampleView/>
        </SampleController>
    </Page>
);