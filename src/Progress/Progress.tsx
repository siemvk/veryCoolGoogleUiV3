import React from "react";
import { size } from "../types";


export interface ProgressProps extends React.HTMLAttributes<HTMLProgressElement> {
    indeterminate?: boolean,
    wavy?: boolean,
    circle?: boolean
}


export const Progress = ({
    children,
    indeterminate,
    wavy,
    circle,
    ...props
}: ProgressProps) => {
    if (indeterminate == undefined) {
        indeterminate = true
    }
    if (circle == undefined) {
        circle = true
    }
    return <progress className={`${indeterminate && "indeterminate"} ${circle && "circle"} ${wavy && "wavy"}`} {...props}></progress>
};

export default Progress;