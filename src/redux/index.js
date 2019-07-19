import {createStore} from "smnrkssn";
import {toggleBool, onDispatcher} from "./toggleBool";

export const toggleOn = onDispatcher.toggle;
export const turnOff = onDispatcher.turnOff;
export const turnOn = onDispatcher.turnOn;
export const store = createStore(toggleBool.getReducers());