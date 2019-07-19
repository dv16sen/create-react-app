import React from "react";
import {Segment, Button, subscribe} from "smnrkssn";
import {toggleOn, turnOff, turnOn} from "../redux";

export const HomePage = subscribe("on")(({dispatch, on}) => {
    return (
        <Segment>
            <Segment>
                {on ? "It's on!" : "It's off!"}
            </Segment>
            <Button onClick={() => dispatch(toggleOn())}>
                Toggle
            </Button>
            <Button onClick={() => dispatch(turnOn())}>
                Turn on
            </Button>
            <Button onClick={() => dispatch(turnOff())}>
                Turn off
            </Button>
        </Segment>
    );
});
HomePage.propTypes = {};