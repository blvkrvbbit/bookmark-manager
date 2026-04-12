import { Link } from "react-router-dom";

import FormField from "../../../../components/FormField";
import Button from "../../../../components/Button";
import classes from "./SignInForm.module.scss";
import { useSignInForm } from "./useSignInForm";
import AuthFooter from "../AuthFooter";
import AuthHeader from "../AuthHeader";
import BookmarkManagerLogo from "../../../../components/BookmarkManagerLogo";

const SignInForm = () => {
  const { form, handleChange, handleSubmit } = useSignInForm();

  return (
    <form className={classes.signInForm} onSubmit={handleSubmit}>
      <BookmarkManagerLogo />
      <AuthHeader
        title="Log in to your account"
        text="Welcome back! Please enter your details."
      />
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
      <AuthFooter
        links={[
          {
            text: "Forgot Password",
            linkText: "Reset it",
            to: "/auth/reset-password",
          },
          {
            text: "Don't have an account?",
            linkText: "Sign up",
            to: "/auth/sign-up",
          },
        ]}
      />
    </form>
  );
};

export default SignInForm;
