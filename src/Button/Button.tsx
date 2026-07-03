import React, { ButtonHTMLAttributes } from "react";
import { size } from "../types";
import TextAndIcon from "../helpers/textAndIcon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  size?: size,
  FAB?: boolean,
  forms?: ("border" | "circle" | "square" | "round" | "no-round" | "left-round" | "right-round" | "top-round" | "bottom-round" | "responsive" | "extend")[],
  responsive?: boolean
}

export const Button = ({
  children,
  icon,
  size,
  FAB,
  forms,
  responsive,
  ...props
}: ButtonProps) => {
  let extraArgs = ""
  let formsString = ""
  forms?.forEach((form) => { formsString = formsString + " " + form })
  if (responsive) {
    extraArgs = extraArgs + " responsive "
  }
  if (FAB) {
    return (
      <button className={`${size} extra ${formsString} ${extraArgs}`} {...props}>
        <i>
          {icon}
        </i>
      </button >
    )
  } else {
    return (
      <button className={`${size} ${formsString} ${extraArgs}`} {...props}>
        <TextAndIcon icon={icon}>{children}</TextAndIcon>
      </button >
    );
  }
};
