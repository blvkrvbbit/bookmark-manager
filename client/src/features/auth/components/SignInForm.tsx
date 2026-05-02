import { Link } from "react-router-dom";
import { useSignInForm } from "../hooks/useSignIn";
import classes from "./SignInForm.module.scss";

const SignInForm = () => {
  const { handleChange, handleSubmit } = useSignInForm();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <header className={classes.header}>
        <h1>Log in to your account</h1>
        <p>Welcome back! Please enter your details.</p>
      </header>
      <div className={classes.fields}>
        <div className={classes.field}>
          <label htmlFor="email">Email address</label>
          <input onChange={handleChange} id="email" type="email" name="email" />
        </div>
        <div className={classes.field}>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button>Log in</button>
      </div>
      <div className={classes.footer}>
        <div>
          Forgot password? <Link to="/auth/forgot-password">Reset it</Link>
        </div>
        <div>
          Don't have an account? <Link to="/auth/sign-up">Sign up</Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
