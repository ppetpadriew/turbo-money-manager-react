import * as React from "react";
import {connect} from "react-redux";
const icon: string = require("../assets/images/hamburger_menu_icon.png");

interface IHamburgerButtonProps {
    dispatch: any
}

interface IHamburgerButtonStates {

}

class HamburgerButton extends React.Component<IHamburgerButtonProps, IHamburgerButtonStates> {
    constructor(props: IHamburgerButtonProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch({type: 'TOGGLE_ACTIVE', payload: {}});
    }

    render(): JSX.Element {
        return(
            <span className="hamburger-button" onClick={this.handleClick}>
                <img src={icon} alt=""/>
            </span>
        );
    }
}

interface IDispatchToProps {
    dispatch: any;
}

const mapStatesToProps = (state: any) => {
    return {
        topNav: state.topNav
    };
};

const mapDispatchToProps = (state: any) => {

};

const connected = connect<any, IHamburgerButtonProps, null>(mapStatesToProps)(HamburgerButton);

export default connected;