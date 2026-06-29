import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string,
  size: "m3-btn-size-medium",
  roundness: "m3-btn-round" | "m3-btn-square",
  variant: "filled" | "outlined" | "tonal"
}

export const Button = ({
  children,
  icon,
  size,
  roundness,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${size} ${roundness} m3-btn-${variant} m3-btn-global`} disabled={true} {...props} >
      <span className="icon">{icon}</span>
      <span>{children}</span>
    </button>
  );
};
