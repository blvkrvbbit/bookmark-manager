import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import "./SignUp.css";
import type { FormEvent } from "react";

const SignUp = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitting form...");
  };

  return (
    <div className="sign-up-container">
      <div className="auth-form">
        <Logo className="brand" />
        <div className="intro">
          <h1 className="text-preset-1-bold">Create your account</h1>
          <p className="text-preset-4-medium">
            Join us and start saving your favorite links — organized,
            searchable, and always within reach.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input label="Full name" />
          <Input label="Email Address" />
          <Input label="Password" />
          <Button>Create account</Button>
        </form>
        <p className="text-preset-4-medium form-footer">
          Already have an account?{" "}
          <Link className="text-preset-4" to="/sign-in">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
