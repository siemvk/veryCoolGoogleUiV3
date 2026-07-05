import React, { ButtonHTMLAttributes, useEffect, useMemo, useState } from "react";
import { pos, size } from "../types";
import { Button } from "../Button/Button";
import Tooltip, { TooltipProps } from "../helpers/tooltip";

export interface NavProps extends ButtonHTMLAttributes<HTMLElement> {
    InitialMenuOpen?: boolean,
    pos?: pos,
    allowSizeChange?: boolean
    selectedId?: string,
    bigButton?: navItem,
    items: navItem[],
    initialSelected?: string,
    autoUpdateSelected?: boolean,
    dontHideOnBottomBigScreen?: boolean
}


export const Nav = ({
    children,
    InitialMenuOpen,
    pos,
    allowSizeChange,
    bigButton,
    selectedId,
    initialSelected,
    autoUpdateSelected,
    dontHideOnBottomBigScreen,
    items,
    ...props
}: NavProps) => {
    if (allowSizeChange == undefined) {
        allowSizeChange = true
    }
    if (InitialMenuOpen == undefined) {
        InitialMenuOpen = true
    }
    if (pos == undefined) {
        pos = "left"
    }
    const [menuOpen, setMenuOpen] = useState(InitialMenuOpen)
    const isRail = pos == "left" || pos == "right"
    const [selected, setSelected] = useState(initialSelected || "ahfihweifhaihfiweifhiaw")
    useMemo(() => {
        if (!isRail) {
            setMenuOpen(false)
        }
    }, [isRail])

    return <>
        <nav className={`${isRail ? "m l" : (!dontHideOnBottomBigScreen ? "s" : "")}  ${pos} scroll ${menuOpen ? "max" : ""}`} {...props}>
            {isRail &&
                <header>
                    {allowSizeChange &&
                        <button className="extra circle transparent" onClick={() => { setMenuOpen(!menuOpen) }}>
                            <i>
                                {menuOpen ? 'menu_open' : 'menu'}
                            </i>
                        </button>
                    }
                    {bigButton &&

                        <button className="extend square round" onClick={() => { if (autoUpdateSelected) { setSelected(bigButton.id) } bigButton.onClick(bigButton) }}>
                            <i>{bigButton.icon}</i>
                            <span>{bigButton.text}</span>
                        </button>
                    }
                </header>
            }

            {(!isRail && bigButton) && <button className="extend square round" onClick={() => { if (autoUpdateSelected) { setSelected(bigButton.id) } bigButton.onClick(bigButton) }}>
                <i>{bigButton.icon}</i>
                <span>{bigButton.text}</span>
            </button>}
            {items.map((v) => {
                return <a onClick={() => { if (autoUpdateSelected) { setSelected(v.id) } v.onClick(v) }} className={selected == v.id ? "active" : ""}>
                    <i>{v.icon}</i>
                    <div>{v.text}</div>
                </a>
            })}
        </nav >
    </>
};

export type navItem = {
    icon: string,
    text: string,
    onClick: (arg0: navItem) => any,
    id: string
}