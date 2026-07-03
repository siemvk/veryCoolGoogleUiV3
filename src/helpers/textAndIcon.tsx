import React from "react";

export interface textIconProps extends React.HTMLAttributes<HTMLElement> {
    icon?: string;
}

const TextAndIcon = ({
    icon,
    children,
    ...props
}: textIconProps) => {
    if (icon) {
        return <>
            <i>
                {icon}
            </i>
            {children &&
                <span>
                    {children}
                </span>
            }
        </>
    } else {
        return children
    }
};

export default TextAndIcon;