import { useState, type ChangeEvent, type SubmitEvent } from "react";
import api from "../../../lib/api";

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

    await api.post("/auth/sign-in", payload);
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
