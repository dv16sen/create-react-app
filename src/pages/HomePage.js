import React from "react";
import {Page} from "../site-components/views/Page";
import SampleContainer from "../site-components/containers/SampleContainer";
import {SampleView} from "../site-components/views/SampleView";

export const HomePage = () => (
    <Page id="home-page">
        <SampleContainer>
            <SampleView/>
        </SampleContainer>
    </Page>
);