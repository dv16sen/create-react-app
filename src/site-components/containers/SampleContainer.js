import {Component} from "react";
import withApiData from "../../components/hocs/withApiData";
import {compose} from "redux";
import {connect} from "react-redux";
import {bindDispatchToActionCreators, childrenWithProps} from "../../utils";
import {toggleSample} from "../../redux/actionCreators";

class SampleContainer extends Component {
    static mapStateToProps = ({sample}) => ({reduxSample: sample});
    static mapDispatchToProps = bindDispatchToActionCreators((props) => ({
        onSampleChange: toggleSample(props)
    }));
    static routes = {
        repositories: "https://api.github.com/users/dv16sen/repos"
    };
    static parsers = {
        repositories: (key, repositories) => {
            return repositories.map(repository => ({
                createdAt: repository.created_at,
                description: repository.description,
                url: repository.url,
                updatedAt: repository.updated_at,
                name: repository.name,
                language: repository.language
            }));
        }
    };

    render() {
        return childrenWithProps(this.props);
    }
}

export default compose(
    connect(SampleContainer.mapStateToProps, SampleContainer.mapDispatchToProps),
    withApiData({
        routes: SampleContainer.routes,
        parsers: SampleContainer.parsers
    })
)(SampleContainer);