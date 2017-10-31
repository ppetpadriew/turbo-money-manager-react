import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {Link} from "react-router5";
import Test from "./components/Test";
import Home from "./components/Home";

interface IAppProps {
    prop1: number,
    prop2: number,
    route: any
}

interface IAppStates {
}

const views:any = {
    test: Test,
    home: Home
};
class App extends React.Component<IAppProps, IAppStates>{
    public render(): JSX.Element{
        const {route} = this.props;
        const segment: string = route ? route.name.split('.')[0] : undefined;
        console.log(segment);

        return (
            <div>
                <h1>Hello World</h1>
                <Link routeName="test" routeOptions={{reload:true}}>Test</Link>
                {React.createElement(views[segment])}
            </div>
        );
    }
}

interface IStatesToProps {
    prop1: number,
    prop2: number,
}

interface IDispatchToProps {
    dispatch: any
}

interface IDispatchDef {
    type: string
}

interface IMergeProps {
    prop1: number,
    prop2: number,
    sayHello: () => void

}

const mapStatesToProps = (state:any) => {
    console.log(state);
    return {
        prop1: 1,
        prop2: 2,
        route: state.router.route
    };
};

const mapDispatchToProps = (dispatch: Dispatch<IDispatchDef>) => {
    return {
        sayHello: () => console.log('Hello')
    };
};

const connectedApp = connect<any, any, null>(mapStatesToProps)(App);

export default connectedApp;