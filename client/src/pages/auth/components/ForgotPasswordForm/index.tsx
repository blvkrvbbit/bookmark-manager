import { useEffect, useState } from "react";
import BookmarkManagerLogo from "../../../../components/BookmarkManagerLogo";
import Button from "../../../../components/Button";
import FormField from "../../../../components/FormField";
import AuthFooter from "../AuthFooter";
import AuthHeader from "../AuthHeader";
import classes from "./ForgotPasswordForm.module.scss";
import { useForgotPasswordForm } from "./useForgotPasswordForm";

const ForgotPasswordForm = () => {
  const { form, handleChange, handleSubmit } = useForgotPasswordForm();

  return (
    <form className={classes.forgotPasswordForm} onSubmit={handleSubmit}>
      <BookmarkManagerLogo />
      <AuthHeader
        title="Forgot your password?"
        text="Enter your email address below and we’ll send you a link to reset your password."
      />
      <div>
        <FormField
          label="Email"
          id="email"
          name="email"
          onChange={handleChange}
          value={form.email}
          required={true}
        />
        <Button variant="primary" fullWidth>
          Send reset link
        </Button>
      </div>
      <AuthFooter
        links={[
          {
            text: "",
            linkText: "Back to login",
            to: "/auth/sign-in",
          },
        ]}
      />
    </form>
  );
};

export default ForgotPasswordForm;
