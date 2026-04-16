import BookmarkManagerLogo from "../../../../components/BookmarkManagerLogo";
import Button from "../../../../components/Button";
import FormField from "../../../../components/FormField";
import AuthFooter from "../AuthFooter";
import AuthHeader from "../AuthHeader";
import classes from "./ResetPasswordForm.module.scss";
import { useResetPasswordForm } from "./useResetPasswordForm";

const ResetPasswordForm = () => {
  const { form, handleSubmit, handleChange } = useResetPasswordForm();
  return (
    <form className={classes.resetPasswordForm} onSubmit={handleSubmit}>
      <BookmarkManagerLogo />
      <AuthHeader
        title="Reset Your Password"
        text={`Enter your new password below. Make sure it’s strong and secure.`}
      />
      <div className={classes.formInputs}>
        <FormField
          id="password"
          label="Password"
          name="password"
          value={form.password}
          type="password"
          onChange={handleChange}
          required={true}
        />
        <FormField
          id="password"
          label="Forgot password"
          name="confirmPassword"
          value={form.confirmPassword}
          type="password"
          onChange={handleChange}
          required={true}
        />
        <Button variant="primary" fullWidth>
          Reset Password
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

export default ResetPasswordForm;
