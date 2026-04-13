import ForgotPasswordForm from "../components/ForgotPasswordForm";
import classes from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  return (
    <div className={classes.wrapper}>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
