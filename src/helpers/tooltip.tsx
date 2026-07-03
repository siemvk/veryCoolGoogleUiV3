import React from "react";
import { pos } from "../types";


export interface TooltipProps extends React.HTMLAttributes<HTMLElement> {
    rich?: boolean,
    pos?: pos
}


const Tooltip = ({
    children,
    rich,
    pos,
    ...props
}: TooltipProps) => {
    return <div className={`tooltip ${rich && "max"} ${pos || ""}`}>
        {children}
    </div>
};

export default Tooltip;