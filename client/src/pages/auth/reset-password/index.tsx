import ResetPasswordForm from "../components/ResetPasswordForm";
import classes from "./ResetPassword.module.scss";

const ResetPassword = () => {
  return (
    <div className={classes.wrapper}>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
