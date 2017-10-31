import * as React from "react";
import { routeNode } from "react-router5";
import { connect } from "react-redux";
import { routeNodeSelector } from "redux-router5";

interface ITestProps {
    route: any;
}

interface ITestStates {

}

class Test extends React.Component<ITestProps, ITestStates> {
    render() {
        const { route } = this.props;

        return (
            <span>My Test Content</span>
        );
    }
}

const connectedTest = connect<any, any, null>((state: any) => routeNodeSelector('test'))(Test);

export default connectedTest;