import React, { useEffect, useMemo, useState } from "react";
import { Nav, NavProps } from "../Nav/Nav";


export interface AutoNavRailProps extends React.HTMLAttributes<HTMLElement> {
    navConfig: NavProps
}


export const AutoNavRail = ({
    navConfig,
    children,
}: AutoNavRailProps) => {
    const [isLeftOrOther, setIsLeftOrOther] = useState(navConfig.pos !== "right");
    useMemo(() => {
        setIsLeftOrOther(navConfig.pos !== "right")
    }, [navConfig])
    return <>
        {isLeftOrOther && <Nav {...navConfig}></Nav>}
        {children}
        {!isLeftOrOther && <Nav {...navConfig}></Nav>}


    </>
};

export default AutoNavRail;