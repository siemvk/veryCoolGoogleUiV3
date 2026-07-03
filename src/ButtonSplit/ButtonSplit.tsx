import React, { ButtonHTMLAttributes, useState } from "react";
import { size } from "../types";
import { Button } from "../Button/Button";
import menuHelper from "../helpers/menu";

export interface SplitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  size?: size,
  responsive?: boolean,
  menu: React.JSX.Element
}

export const SplitButton = ({
  children,
  icon,
  size,
  responsive,
  menu,
  ...props
}: SplitButtonProps) => {
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
          {menu}
        </div>
      </nav >
    </div>
  );
};
export { Button };

