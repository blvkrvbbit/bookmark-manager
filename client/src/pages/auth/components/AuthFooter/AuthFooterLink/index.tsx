import { Link } from "react-router-dom";
import classes from "./AuthFooterLink.module.scss";
import type { AuthFooterLinkProps } from "./types";

const AuthFooterLink = ({ text, linkText, to }: AuthFooterLinkProps) => {
  return (
    <div className={classes.authFooterLink}>
      {text}{" "}
      <Link className={classes.authLink} to={to}>
        {linkText}
      </Link>
    </div>
  );
};

export default AuthFooterLink;
