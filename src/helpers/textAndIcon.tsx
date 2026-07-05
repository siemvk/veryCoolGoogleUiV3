import React from "react";

export interface TextIconProps extends React.HTMLAttributes<HTMLElement> {
    icon?: string;
}

export const TextAndIcon = ({
    icon,
    children,
    ...props
}: TextIconProps) => {
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