import React, {Component} from "react";
import axios from "axios";

export default ({routes, defaultState = {}, parsers = {}}) => (WrappedComponent) => {
    const parse = {
        ...Object.keys(routes).map(routeKey =>
            (parsers[routeKey])
                ? {[routeKey]: parsers[routeKey]}
                : {[routeKey]: (key, data) => data}
        ).reduce((acc, next) => ({...acc, ...next}))
    };

    return class extends Component {
        state = {
            ...Object.keys(routes)
                .map(routeKey => ({[routeKey]: []}))
                .reduce((acc, next) => ({...acc, ...next})),
            ...defaultState
        };
        fetchApiData = async () => Promise.all(
            Object.keys(routes).map(routeKey =>
                axios.get(routes[routeKey])
                    .then(res => ({[routeKey]: parse[routeKey](routeKey, res.data)}))
            )
        ).then(data => data.reduce((acc, next) => ({...acc, ...next})));

        async componentDidMount() {
            this.mounted = true;

            try {
                const data = await this.fetchApiData();

                if(this.mounted){
                    this.setState(data);
                }
            } catch(err){
                console.error(err);
            }
        }

        componentWillUnmount() {
            this.mounted = false;
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props}/>;
        }
    };
};