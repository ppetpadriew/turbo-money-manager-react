import * as React from "react";
import HamburgerButton from "./HamburgerButton";

interface ITopNavProps {

}

interface ITopNavStates {

}

class TopNav extends React.Component<ITopNavProps, ITopNavStates>
{
    render(): JSX.Element {
        return(
            <div className="top-nav">
                <HamburgerButton/>
            </div>
        );
    }
}

export default TopNav;