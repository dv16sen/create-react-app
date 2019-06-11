import {ReduxAsyncState} from "smnrkssn";

const asyncState = new ReduxAsyncState();

export const fetchStuff = asyncState.createDispatcher({stuff: "hello"}, () =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject("This is an error"), 2000);
    })
);

export default asyncState.getReducers();