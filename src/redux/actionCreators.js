import {sampleAction} from "./actions";

export const toggleSample = (props) => () => (dispatch, getState) => {
    console.log(props);
    const {sample} = getState();

    if(sample === "This is a sample redux state"){
        dispatch(sampleAction("State changed!"));
    } else {
        dispatch(sampleAction("This is a sample redux state"));
    }
};