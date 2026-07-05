import React from "react";
import { size } from "../../types";


export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
    size?: size
}


export const Radio = ({
    size,
    children,
    ...props
}: RadioProps) => {
    return <label className={`radio ${size || ""}`}>
        <input type="radio" {...props} />
        <span>{children || ""}</span>
    </label>
};

export default Radio;