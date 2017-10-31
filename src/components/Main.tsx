import * as React from "react";
import Test from "./Test";
import {routeNode} from "react-router5";

const components:any = {
    'test': Test
};

interface IMainProps {
    route: any
}

interface IMainStates {

}

class Main extends React.Component<IMainProps, IMainStates> {
        public route:any;

        constructor(props: any, context: any) {
            super(props, context);
            console.log(context);
            this.route = context.route;
        }

        render(): JSX.Element {
            const segment = this.route.name.split('.')[0];

            return React.createElement(components[segment]);
        }
}

export default routeNode('')(Main);
