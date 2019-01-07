import {Component} from "react";
import withApiData from "../../components/hocs/withApiData";
import {compose} from "redux";
import {connect} from "react-redux";
import {bindDispatchToActionCreators, childrenWithProps} from "../../utils";
import {toggleSample} from "../../redux/actionCreators";

class SampleController extends Component {
    static mapStateToProps = ({sample}) => ({reduxSample: sample});
    static mapDispatchToProps = bindDispatchToActionCreators((props) => ({
        onSampleChange: toggleSample(props)
    }));
    static apiOptions = {
        repositories: {
            route: "https://api.github.com/users/dv16sen/repos",
            parse: (key, repositories) => {
                return repositories.map(repository => ({
                    createdAt: repository.created_at,
                    description: repository.description,
                    url: repository.url,
                    updatedAt: repository.updated_at,
                    name: repository.name,
                    language: repository.language
                }));
            }
        }
    };

    render() {
        return childrenWithProps(this.props);
    }
}

export default compose(
    connect(SampleController.mapStateToProps, SampleController.mapDispatchToProps),
    withApiData(SampleController.apiOptions)
)(SampleController);