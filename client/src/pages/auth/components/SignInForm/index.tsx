import { Link } from "react-router-dom";

import FormField from "../../../../components/FormField";
import Button from "../../../../components/Button";
import classes from "./SignInForm.module.scss";
import { useSignInForm } from "./useSignInForm";

const SignInForm = () => {
  const { form, handleChange, handleSubmit } = useSignInForm();

  return (
    <form className={classes.signInForm} onSubmit={handleSubmit}>
      <div>
        <img src="/bookmark-manager-light.svg" alt="Bookmark manager logo" />
      </div>
      <header>
        <h1>Log in to your account</h1>
        <p>Welcome back! Please enter your details.</p>
      </header>
      <div className={classes.formInputs}>
        <FormField
          id="email"
          label="Email"
          name="email"
          value={form.email}
          type="email"
          onChange={handleChange}
        />
        <FormField
          id="password"
          label="Password"
          name="password"
          value={form.password}
          type="password"
          onChange={handleChange}
        />
        <Button variant="primary" fullWidth>
          Login
        </Button>
      </div>
      <div className={classes.authFooter}>
        <div>
          Forgot Password?{" "}
          <Link className={classes.authLink} to="/auth/reset-password">
            Reset it
          </Link>
        </div>
        <div>
          Don't have an account?{" "}
          <Link className={classes.authLink} to="/auth/sign-up">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
