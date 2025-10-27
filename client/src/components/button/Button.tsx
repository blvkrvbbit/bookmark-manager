import type { ReactNode } from "react";
import "./button.styles.css";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, variant = "primary" }: Props) => {
  return (
    <button className={`btn btn-${variant} text-preset-3`}>{children}</button>
  );
};

export default Button;
