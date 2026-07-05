import React from "react";


export interface SpaceProps extends React.HTMLAttributes<HTMLElement> {
    size?: "space" | "medium-space" | "large-space"
}


export const Space = ({
    size,
    ...props
}: SpaceProps) => {
    return <div className={size || "space"} {...props}>

    </div>
};

export default Space;