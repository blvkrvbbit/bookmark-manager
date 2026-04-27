import { Link } from "react-router-dom";
import "./ResetPasswordForm.module.scss";
import classes from "./ResetPasswordForm.module.scss";
import { useResetPassword } from "../hooks/useResetPassword";

const ResetPasswordForm = () => {
  const { handleChange, handleSubmit } = useResetPassword();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <header className={classes.header}>
        <h1>Reset Your Password</h1>
        <p>Enter your new password below. Make sure it’s strong and secure.</p>
      </header>
      <div className={classes.fields}>
        <div className={classes.field}>
          <label htmlFor="password">
            New Password <span className={classes.required}>*</span>
          </label>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="confirmPassword">
            Confirm Password <span className={classes.required}>*</span>
          </label>
          <input
            onChange={handleChange}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button>Reset Password</button>
      </div>
      <div className={classes.footer}>
        <Link to="/auth/sign-in">Back to login</Link>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
