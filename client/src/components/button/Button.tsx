import type { ReactNode, MouseEvent } from "react";
import "./Button.css";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, variant = "primary" }: Props) => {
  return (
    <button className={`btn btn-${variant} text-preset-3-semibold`}>
      {children}
    </button>
  );
};

export default Button;
