import asyncReducers from "./asyncDispatchers";
import reducers from "./dispatchers";
import {createStore} from "smnrkssn";

export default createStore({
    ...asyncReducers,
    ...reducers
});