import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import "./SignUp.css";
import axios from "../../api/axios";

type FormFields = {
  name: string;
  email: string;
  password: string;
};

const defaultFormFields: FormFields = {
  name: "",
  email: "",
  password: "",
};

// Sign Up Page
const SignUp = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { name, email, password } = formFields;
    const res = await axios.post("/auth/sign-up", {
      name,
      email,
      password,
    });
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
          <Input
            onChange={handleChange}
            label="Full name"
            name="name"
            type={"text"}
          />
          <Input
            onChange={handleChange}
            label="Email Address"
            name="email"
            type={"text"}
          />
          <Input
            onChange={handleChange}
            label="Password"
            name="password"
            type={"password"}
          />
          <Button>Create account</Button>
        </form>
        <p className="text-preset-4-medium form-footer">
          Already have an account?{" "}
          <Link className="text-preset-4-semibold" to="/sign-in">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
