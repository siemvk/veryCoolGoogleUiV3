import React, { ElementType } from "react";
import TextAndIcon from "./textAndIcon";
import { pos } from "../types";

export type menuHelperProps = {
    menuData: menuItem[],
    docked?: boolean,
    fullscreen?: boolean,
    open?: boolean,
    noWrap?: boolean,
    positions?: pos
};

const menuHelper = ({
    fullscreen,
    docked,
    menuData,
    noWrap,
    open,
    positions
}: menuHelperProps) => {
    if (fullscreen && docked) {
        return <p>Invalid menu</p>
    }
    // lets do le css/class gen
    let extraClasses = "";
    if (fullscreen) {
        extraClasses = extraClasses + " max "
    } else if (docked) {
        extraClasses = extraClasses + " min "
    }
    if (noWrap) {
        extraClasses = extraClasses += " no-wrap "
    }
    if (open) {
        extraClasses = extraClasses += "active"
    }
    return (
        // <menu className={`left no-wrap${extraClasses}`}>
        <menu className={`${extraClasses} ${positions}`}>
            {menuData.map((v, i) => {
                return (
                    <li key={v.content || i} className={v.selected ? "active" : undefined} onClick={v.onClick}>
                        <TextAndIcon icon={v.icon}>
                            {v.content}
                            {v.subMenu && menuHelper({ menuData: v.subMenu, fullscreen, docked })}
                        </TextAndIcon>
                    </li>
                )
            })}
        </menu>
    )

};
export const divider: menuItem = {
    content: <hr />
};
export default menuHelper;


type menuItem = {
    content: string | any,
    icon?: string,
    selected?: boolean,
    onClick?: React.MouseEventHandler<HTMLLIElement>,
    subMenu?: menuItem[]
}