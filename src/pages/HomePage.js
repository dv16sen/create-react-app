import React from "react";
import {Segment, Message, Button, Columns, subscribe} from "smnrkssn";
import {toggleOn, turnOff, turnOn} from "../redux/dispatchers";
import {fetchStuff} from "../redux/asyncDispatchers";

export const HomePage = subscribe("stuff", "on")(({dispatch, stuff, on}) => {
    return (
        <Columns>
            <Segment onClick={() => dispatch(fetchStuff())} loading={stuff.loading}>
                {stuff.error ? (
                    <Message error>
                        {stuff.error}
                    </Message>
                ) : stuff.data}
            </Segment>
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
        </Columns>
    );
});