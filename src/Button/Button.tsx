import React, { ButtonHTMLAttributes } from "react";
import { size } from "../types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  size?: size,
  FAB?: boolean,
  forms?: "border" | "circle" | "square" | "round" | "no-round" | "left-round" | "right-round" | "top-round" | "bottom-round" | "responsive" | "extend",
  responsive: boolean
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
  if (responsive) {
    extraArgs = extraArgs + " responsive "
  }
  if (FAB) {
    return (
      <button className={`${size} extra ${forms} ${extraArgs}`}>
        <i>
          {icon}
        </i>
      </button >
    )
  } else {
    return (
      <div>
        <button className={`${size} ${forms} ${extraArgs}`}>
          {icon ?
            <>
              <i>
                {icon}
              </i>
              {children ?
                <span>
                  {children}
                </span>
                : ""
              }
            </> : <>
              {children ? children : ""}
            </>}
        </button >
        <menu>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </menu>
      </div>
    );
  }
};
