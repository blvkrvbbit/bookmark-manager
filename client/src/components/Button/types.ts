import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
