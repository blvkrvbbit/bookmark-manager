import { Outlet } from "react-router-dom";
import classes from "./AuthLayout.module.scss";
import Logo from "../shared/icons/bookmark-manager-light.svg";

const AuthLayout = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <img className={classes.logo} src={Logo} alt="" />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
