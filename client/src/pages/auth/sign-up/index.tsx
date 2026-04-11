import SignUpForm from "../components/SignUpForm";
import classes from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <div className={classes.wrapper}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
