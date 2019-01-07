import React, {Component} from "react";
import axios from "axios";

export default (options) => (WrappedComponent) => {
    const routes = Object
        .keys(options)
        .map(routeKey => ({
            [routeKey]: {
                ...options[routeKey],
                defaultValue: (options[routeKey].defaultValue) ? options[routeKey].defaultValue : [],
                parse: (options[routeKey].parse) ? options[routeKey].parse : (key, data) => data,
                axiosConfig: (options[routeKey].axiosConfig) ? options[routeKey].axiosConfig : {}
            }
        }))
        .reduce((acc, next) => ({...acc, ...next}));

    return class extends Component {
        state = Object
            .keys(routes)
            .map(routeKey => ({[routeKey]: routes[routeKey].defaultValue}))
            .reduce((acc, next) => ({...acc, ...next}));

        fetchApiData = async () => Promise.all(
            Object.keys(routes).map(routeKey =>
                axios.get(routes[routeKey].route, routes[routeKey].axiosConfig)
                    .then(res => ({[routeKey]: routes[routeKey].parse(routeKey, res.data)}))
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
                console.table(err);
                if(this.mounted){
                    this.setState({apiError: true});
                }
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