import React from "react";
import { size } from "../../types";


export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    size?: size
}


export const Checkbox = ({
    size,
    children,
    ...props
}: CheckboxProps) => {
    return <label className={`checkbox ${size || ""}`}>
        <input type="checkbox" {...props} />
        <span>{children || ""}</span>
    </label>
};

export default Checkbox;