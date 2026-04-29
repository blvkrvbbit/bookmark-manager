import { useState, type ChangeEvent, type SubmitEvent } from "react";
import api from "../../../lib/api";
import { useAuth } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

type SignInFormValues = {
  email: string;
  password: string;
};

const defaultFormValues: SignInFormValues = {
  email: "",
  password: "",
};

export const useSignInForm = () => {
  const [form, setForm] = useState<SignInFormValues>(defaultFormValues);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof SignInFormValues;
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: SignInFormValues = {
      ...form,
    };

    try {
      await login(payload);
      navigate("/");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const resetForm = () => {
    setForm(defaultFormValues);
  };

  return {
    handleChange,
    handleSubmit,
    resetForm,
  };
};
