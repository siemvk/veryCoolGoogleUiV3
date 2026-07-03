import React, { ButtonHTMLAttributes } from "react";
import { size } from "../types";
import TextAndIcon from "../helpers/textAndIcon";
import Tooltip, { TooltipProps } from "../helpers/tooltip";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  size?: size,
  FAB?: boolean,
  forms?: ("border" | "circle" | "square" | "round" | "no-round" | "left-round" | "right-round" | "top-round" | "bottom-round" | "responsive" | "extend" | "transparent" | "link")[],
  responsive?: boolean,
  extendedFAB?: boolean,
  buttonTooltip?: React.ReactElement<TooltipProps, typeof Tooltip>;
}

export const Button = ({
  children,
  icon,
  size,
  FAB,
  forms,
  responsive,
  extendedFAB,
  buttonTooltip: buttonTooltip,
  ...props
}: ButtonProps) => {
  let extraArgs = ""
  let formsString = ""
  forms?.forEach((form) => { formsString = formsString + " " + form })
  if (responsive) {
    extraArgs = extraArgs + " responsive "
  }
  if (extendedFAB) {
    extraArgs = extraArgs + " extend "
  }
  if (FAB) {
    return (
      <button className={`${size} extra ${formsString} ${extraArgs}`} {...props}>
        <i>
          {icon}
        </i>
        {extendedFAB && <span>
          {children}
        </span>}
        {buttonTooltip}
      </button >
    )
  } else {
    return (
      <button className={`${size} ${formsString} ${extraArgs}`} {...props}>
        <TextAndIcon icon={icon}>{children}
          {buttonTooltip}
        </TextAndIcon>
      </button >
    );
  }
};
