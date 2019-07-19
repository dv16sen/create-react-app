import {ReduxAction} from "smnrkssn";

export const toggleBool = new ReduxAction({
    toggle: (state) => !state,
    turnOff: () => false,
    turnOn: () => true
});

export const onDispatcher = toggleBool.addState({on: false});