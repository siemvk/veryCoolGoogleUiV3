import React, { useEffect, useMemo, useState } from "react";
import { Nav, NavProps } from "../Nav/Nav";


export interface autoNavRailProps extends React.HTMLAttributes<HTMLElement> {
    navConfig: NavProps
}


const AutoNavRail = ({
    navConfig,
    children,
}: autoNavRailProps) => {
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