import { Link } from "react-router-dom";
import classes from "./ForgotPasswordForm.module.scss";
import { useForgotPasswordForm } from "../hooks/useForgotPassword";

const ForgotPasswordForm = () => {
  const { handleChange, handleSubmit } = useForgotPasswordForm();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <header className={classes.header}>
        <h1>Forgot your password?</h1>
        <p>
          Enter your email address below and we’ll send you a link to reset your
          password.
        </p>
      </header>
      <div className={classes.fields}>
        <div className={classes.field}>
          <label htmlFor="email">
            Email address <span className={classes.required}>*</span>
          </label>
          <input onChange={handleChange} id="email" type="email" name="email" />
        </div>
      </div>
      <div className={classes.actions}>
        <button>Send reset link</button>
      </div>
      <div className={classes.footer}>
        <Link to="/auth/sign-in">Back to login</Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
