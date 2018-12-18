import {actionTypes} from "./actionTypes";
import {combineReducers} from "redux";

export const initialState = {
    sample: "This is a sample redux state"
};

export const sample = (state = "", action) => {
    switch(action.type){
    case actionTypes.SAMPLE_ACTION:
        return action.payload;
    default:
        return state;
    }
};

export default combineReducers({
    sample
});