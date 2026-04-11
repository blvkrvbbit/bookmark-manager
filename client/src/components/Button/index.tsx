import classes from "./Button.module.scss";
import type { ButtonProps } from "./types";

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        ${classes.btn}
        ${classes[variant]}
        ${fullWidth ? classes.fullWidth : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
