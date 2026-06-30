import React, { ButtonHTMLAttributes } from "react";
import "./FAB.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "m3-btn-size-medium",
}

export const Button = ({
  children,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button className={`m3-FAB-global m3-FAB-m`} {...props} >
      <span className="material-icons">{children}</span>
    </button>
  );
};
