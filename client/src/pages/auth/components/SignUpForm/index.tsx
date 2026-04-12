import { Link } from "react-router-dom";

import FormField from "../../../../components/FormField";
import Button from "../../../../components/Button";
import { useSignUpForm } from "./useSignUpForm";
import classes from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const { form, handleChange, handleSubmit } = useSignUpForm();

  return (
    <form className={classes.signUpForm} onSubmit={handleSubmit}>
      <div>
        <img src="/bookmark-manager-light.svg" alt="Bookmark manager logo" />
      </div>
      <header>
        <h1>Create your account</h1>
        <p>
          Join us and start saving your favorite links — organized, searchable,
          and always within reach.
        </p>
      </header>
      <div className={classes.formInputs}>
        <FormField
          id="fullName"
          label="Full name"
          name="fullName"
          value={form.fullName}
          required={true}
          onChange={handleChange}
        />
        <FormField
          id="email"
          label="Email address"
          name="email"
          value={form.email}
          type="email"
          required={true}
          onChange={handleChange}
        />
        <FormField
          id="password"
          label="Password"
          name="password"
          value={form.password}
          type="password"
          required={true}
          onChange={handleChange}
        />
        <Button variant="primary" fullWidth>
          Create Account
        </Button>
      </div>
      <div className={classes.authFooter}>
        Already have an account?{" "}
        <Link className={classes.authLink} to="/auth/sign-in">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
