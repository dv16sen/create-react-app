import {actionTypes} from "./actionTypes";

export const sampleAction = (string) => ({
    type: actionTypes.SAMPLE_ACTION,
    payload: string
});