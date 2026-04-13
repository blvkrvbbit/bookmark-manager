import classes from "./AuthFooter.module.scss";
import type { AuthFooterProps } from "./types";
import AuthFooterLink from "./AuthFooterLink";

const AuthFooter = ({ links }: AuthFooterProps) => {
  return (
    <div className={classes.authFooter}>
      {links.map((l, id: number) => (
        <AuthFooterLink
          key={id}
          text={l.text}
          linkText={l.linkText}
          to={l.to}
        />
      ))}
    </div>
  );
};

export default AuthFooter;
