import {ReduxAction} from "smnrkssn";

export const toggleBoolAction = new ReduxAction({
    toggle: (state) => !state,
    turnOff: () => false,
    turnOn: () => true
});
const onDispatcher = toggleBoolAction.addState({on: false});
export const toggleOn = onDispatcher.toggle;
export const turnOff = onDispatcher.turnOff;
export const turnOn = onDispatcher.turnOn;

export default {
    ...toggleBoolAction.getReducers()
}