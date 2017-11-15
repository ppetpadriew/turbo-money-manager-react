import * as React from "react";

interface IIconProps{
    icon: string
}

interface IIconStates{

}

class Icon extends React.Component<IIconProps, IIconStates> {
    render(): JSX.Element {
        return(<span className={`side-menu__icon ${this.props.icon}`}></span>);
    }
}

export default Icon;