import React, { ButtonHTMLAttributes, useState } from "react";
import { size } from "../types";
import { Button } from "../Button/Button";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  size?: size,
  responsive?: boolean
}

export const SplitButton = ({
  children,
  icon,
  size,
  responsive,
  ...props
}: ButtonProps) => {
  let extraArgs = ""
  if (responsive) {
    extraArgs = extraArgs + " responsive "
  }
  const [open, setOpen] = useState(false)
  return (
    <div>
      <nav className="group split">
        <Button
          size={size}
          forms={["left-round"]}
          responsive={responsive}
          FAB={false}
          icon={icon}
          {...props}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            props.onClick?.(e); // Does NOT touch the menu
          }}
        >
          {children}
        </Button>
        <div>
          <Button icon="keyboard_arrow_down" forms={["right-round", "square"]} onClick={() => { setOpen(true) }} />
          <menu className="right no-wrap">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </menu>
        </div>
      </nav >
    </div>
  );
};
export { Button };

