import {Component} from "react";
import withApiData from "../../components/hocs/withApiData";
import {compose} from "redux";
import {connect} from "react-redux";
import {apiRoutes} from "../../utils/constants/apiRoutes";
import {bindDispatchToActionCreators, childrenWithProps} from "../../utils";
import {toggleSample} from "../../redux/actionCreators";

class SampleContainer extends Component {
    static mapStateToProps = ({sample}) => ({reduxSample: sample});
    static mapDispatchToProps = bindDispatchToActionCreators((props) => ({
        onSampleChange: toggleSample(props)
    }));

    render() {
        return childrenWithProps(this.props);
    }
}

export default compose(
    connect(SampleContainer.mapStateToProps, SampleContainer.mapDispatchToProps),
    withApiData({bitcoinNews: apiRoutes.bitcoinNews})
)(SampleContainer);