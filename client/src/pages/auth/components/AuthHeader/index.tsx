import type { AuthHeaderProps } from "./types";
import classes from "./AuthHeader.module.scss";

const AuthHeader = ({ title, text }: AuthHeaderProps) => {
  return (
    <header className={classes.authHeader}>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
};

export default AuthHeader;
