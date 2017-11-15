import * as React from "react";
import { connect } from "react-redux";
import { routeNodeSelector } from "redux-router5";
import SideMenuItem from "./SideMenuItem";

interface ISideMenuProps {
    router: any,
    topNav: any
}

interface ISideMenuStates {

}
/**
 * @todo:
 * 1. Get active or inactive route and use it to define the css class to each link
 * 2. make each li as link that can link to other page
 */
class SideMenu extends React.Component<ISideMenuProps, ISideMenuStates> {
    render(): JSX.Element {
        const {router, topNav} = this.props;
        console.log('is active = ',topNav.payload.isActive);
        const cssClassName = topNav.payload.isActive ? 'side-menu--slide-in' : '';
        return(
            <ul className={"side-menu " + cssClassName}>
                {/*<li>Profile Image</li>*/}
                <SideMenuItem name="home" icon="ion-ios-home-outline">Home</SideMenuItem>
                <SideMenuItem name="categories" icon="ion-ios-albums-outline">Categories</SideMenuItem>
                <SideMenuItem name="transactions" icon="ion-ios-list-outline">Transactions</SideMenuItem>
                <SideMenuItem name="accounts" icon="ion-ios-book-outline">Accounts</SideMenuItem>
                <SideMenuItem name="logout" icon="ion-power">Logout</SideMenuItem>
            </ul>
        );
    }
}

const connectedSideMenu = connect<any, any, null>((state: any) => state)(SideMenu);

export default connectedSideMenu;