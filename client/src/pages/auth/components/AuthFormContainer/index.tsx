import { type ReactNode } from "react";

import classes from "./AuthFormContainer.module.scss";
import BookmarkManagerLogo from "../../../../components/BookmarkManagerLogo";

type Props = {
  children: ReactNode;
};

const AuthFormContainer = ({ children }: Props) => {
  return (
    <div className={classes.authForm}>
      <BookmarkManagerLogo />
      {children}
    </div>
  );
};

export default AuthFormContainer;
