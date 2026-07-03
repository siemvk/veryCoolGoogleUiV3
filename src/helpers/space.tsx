import React from "react";


export interface spaceProps extends React.HTMLAttributes<HTMLElement> {
    size?: "space" | "medium-space" | "large-space"
}


const Space = ({
    size,
    ...props
}: spaceProps) => {
    return <div className={size || "space"} {...props}>

    </div>
};

export default Space;