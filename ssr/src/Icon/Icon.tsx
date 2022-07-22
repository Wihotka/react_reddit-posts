import React from 'react';
import styles from './icon.css';
import * as SvgIcon from './../Icons'
import classNames from "classnames";


export type TNames = 'CommentIcon' | 'HideIcon' | 'ReportIcon' | 'SaveIcon' | 'ShareIcon';

export type TSizes = 12 | 16;

interface ITextProps {
    size?: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    icon?: React.ReactNode;
    name: TNames;
}

export function Icon(props :ITextProps){
    const {size = 16, mobileSize,desktopSize, tabletSize,  name, icon} = props;
    const [svgIconComponent, setSvgIconComponent] = React.useState(icon);
    const classes = classNames(
        styles.icon,
        styles[`s${size}`],
        {[styles[`m${mobileSize}`]]: mobileSize},
        {[styles[`d${desktopSize}`]]: desktopSize},
        {[styles[`t${tabletSize}`]]: tabletSize},
    );

    React.useEffect(() => {
        if(typeof svgIconComponent === 'undefined'){
            setSvgIconComponent(SvgIcon[name]);
        }
    },[]);

    return(
        <div className={classes}>
            {svgIconComponent}
        </div>
    )
}
