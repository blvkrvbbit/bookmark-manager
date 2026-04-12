import { Link } from "react-router-dom";

import FormField from "../../../../components/FormField";
import Button from "../../../../components/Button";
import { useSignUpForm } from "./useSignUpForm";
import classes from "./SignUpForm.module.scss";
import AuthFooter from "../AuthFooter";
import BookmarkManagerLogo from "../../../../components/BookmarkManagerLogo";
import AuthHeader from "../AuthHeader";

const SignUpForm = () => {
  const { form, handleChange, handleSubmit } = useSignUpForm();

  return (
    <form className={classes.signUpForm} onSubmit={handleSubmit}>
      <BookmarkManagerLogo />
      <AuthHeader
        title="Create your account"
        text={`
         Join us and start saving your favorite links — organized, searchable,
          and always within reach.
        `}
      />
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
      <AuthFooter
        links={[
          {
            text: "Already have an account?",
            linkText: "Log in",
            to: "/auth/sign-in",
          },
        ]}
      />
    </form>
  );
};

export default SignUpForm;
