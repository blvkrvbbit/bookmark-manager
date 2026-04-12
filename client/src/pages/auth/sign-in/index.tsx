import SignInForm from "../components/SignInForm";
import classes from "./SignIn.module.scss";
const SignIn = () => {
  return (
    <div className={classes.wrapper}>
      <SignInForm />
    </div>
  );
};

export default SignIn;
