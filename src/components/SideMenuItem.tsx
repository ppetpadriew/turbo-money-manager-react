import * as React from "react";
import {connect} from "react-redux";
import {object} from "prop-types";
import {actions} from "redux-router5";
import Icon from "./Icon";

interface ISideMenuItemProps {
    name: string,
    icon: string,
    params: any,
    options: any
    router: any,
}

interface IDispatchToProps {
    dispatch: any
}

interface ISideMenuItemStates {

}


class SideMenuItem extends React.Component<ISideMenuItemProps & IDispatchToProps, ISideMenuItemStates> {
    public static contextTypes: React.ValidationMap<any> = {
        router: object.isRequired
    };


    render(): JSX.Element {
        const { name, params, options } = this.props;
        const {navigateTo} = actions;
        console.log(actions);
        console.log(this.props.router);
        const {router} = this.context;
        const href = router.buildPath(name, params);
        const onClick = (evt: any) => {
            evt.preventDefault();
            this.props.dispatch(navigateTo(name, params, options));
        };
        const liClassName = router.isActive(name, params) ? 'side-menu__item--active' : '';
        const linkClassName = router.isActive(name, params) ? 'side-menu__link--active' : '';

        return(
            <li className={`side-menu__item  ${liClassName}`}>
                <a { ...{ href, onClick } } className={`side-menu__link ${linkClassName}`}>
                    <Icon icon={this.props.icon} />
                    <span className="side-menu__link-text">{ this.props.children }</span>
                </a>
            </li>
        );
    }
}

const connected = connect<any, IDispatchToProps, any>((state:any) => {
    console.log(state);
    return state;
})(SideMenuItem);

export default connected;