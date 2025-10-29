import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import "./SignIn.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "../../api/axios";

type FormFields = {
  email: string;
  password: string;
};

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = formFields;
    const res = await axios.post("/auth/sign-in", {
      email,
      password,
    });
    console.log(res);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="sign-in-container">
      <div className="auth-form">
        <Logo className="brand" />
        <div className="intro">
          <h1 className="text-preset-1-bold">Login to your account</h1>
          <p className="text-preset-4-medium">
            Welcome back! Please enter your details
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            label="Email"
            name="email"
            type={"text"}
          />
          <Input
            onChange={handleChange}
            label="Password"
            name="password"
            type={"password"}
          />
          <Button>Log in</Button>
        </form>
        <div>
          <p className="text-preset-4-medium form-footer">
            Forgot password?{" "}
            <Link className="text-preset-4-semibold" to="/sign-in">
              Reset it
            </Link>
          </p>
          <p className="text-preset-4-medium form-footer">
            Don't have an account?{" "}
            <Link className="text-preset-4-semibold" to="/sign-up">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
