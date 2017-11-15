import * as React from "react";
import { routeNode } from "react-router5";
import { connect } from "react-redux";
import { routeNodeSelector } from "redux-router5";

interface IHomeProps {
    route: any;
}

interface IHomeStates {

}

class Home extends React.Component<IHomeProps, IHomeStates> {
    render() {
        const { route } = this.props;

        return (
            <span>My Home Content</span>
        );
    }
}

const connectedHome = connect<any, any, null>((state: any) => routeNodeSelector('test'))(Home);

export default connectedHome;