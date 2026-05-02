import { Link } from "react-router-dom";
import classes from "./SignUpForm.module.scss";
import { useSignUpForm } from "../hooks/useSignUp";

const SignUpForm = () => {
  const { handleChange, handleSubmit } = useSignUpForm();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <header className={classes.header}>
        <h1>Create your account</h1>
        <p>
          Join us and start saving your favorite links — organized, searchable,
          and always within reach.
        </p>
      </header>
      <div className={classes.fields}>
        <div className={classes.field}>
          <label htmlFor="fullName">
            Full Name <span className={classes.required}>*</span>
          </label>
          <input
            onChange={handleChange}
            id="fullName"
            type="text"
            name="fullName"
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="email">
            Email address <span className={classes.required}>*</span>
          </label>
          <input onChange={handleChange} id="email" type="email" name="email" />
        </div>
        <div className={classes.field}>
          <label htmlFor="password">
            Password <span className={classes.required}>*</span>
          </label>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button>Create Account</button>
      </div>
      <div className={classes.footer}>
        Already have an account?
        <Link to="/auth/sign-in">Sign In</Link>
      </div>
    </form>
  );
};

export default SignUpForm;
