import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  color?: "primary";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    label,
    color,
    size,
    loading = false,
    disabled = false,
    children,
    onClick,
    ...other
  } = props;

  return <button {...other}> {label || children}</button>;
};
