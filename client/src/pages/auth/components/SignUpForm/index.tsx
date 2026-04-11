import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { Link } from "react-router-dom";

import FormField from "../../../../components/FormField";
import { Button } from "../../../../components/Button";

import type { SignUpFormValues } from "./types";
import classes from "./SignUpForm.module.scss";

const defaultFormValues: SignUpFormValues = {
  fullName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [form, setForm] = useState<SignUpFormValues>(defaultFormValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof SignUpFormValues;
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <form className={classes.signUpForm} onSubmit={handleCreate}>
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
          required={true}
          onChange={handleChange}
        />
        <FormField
          id="email"
          label="Email address"
          name="email"
          type="email"
          required={true}
          onChange={handleChange}
        />
        <FormField
          id="password"
          label="Password"
          name="password"
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
        <Link className={classes.authLink} to="/sign-in">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
