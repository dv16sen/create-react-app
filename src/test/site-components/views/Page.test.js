import React from "react";
import {render} from "enzyme";
import {Page} from "../../../site-components/views/Page";

describe("Page tests", () => {
    it("Should render without throwing errors", () => {
        render(<Page/>);
    });

    it("Should add custom className", () => {
        const wrapper = render(<Page className="foo"/>);
        expect(wrapper.find('.foo').length).toBe(1);
    });

    it("Should add other props", () => {
        const wrapper = render(<Page id="foo"/>);
        expect(wrapper.find("#foo").length).toBe(1);
    });
});