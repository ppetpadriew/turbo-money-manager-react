import * as React from "react";
import {connect, Dispatch} from "react-redux";

interface IAppProps {
    prop1: number,
    prop2: number
}

interface IAppStates {
}

class App extends React.Component<IAppProps, IAppStates>{
    public render(): JSX.Element{
        return (
            <div>
                <h1>Hello World</h1>
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

const mapStatesToProps = (state:IAppStates) => {
    return {
        prop1: 1,
        prop2: 2
    };
};

const mapDispatchToProps = (dispatch: Dispatch<IDispatchDef>) => {
    return {
        sayHello: () => console.log('Hello')
    };
};

const connectedApp = connect<IStatesToProps, IDispatchToProps, null>(mapStatesToProps)(App);

export default connectedApp;