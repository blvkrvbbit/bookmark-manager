import { useState, type ChangeEvent, type SubmitEvent } from "react";
import type { SignUpFormValues } from "./types";

const defaultFormValues: SignUpFormValues = {
  fullName: "",
  email: "",
  password: "",
};

export const useSignUpForm = () => {
  const [form, setForm] = useState<SignUpFormValues>(defaultFormValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof SignUpFormValues;
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: SignUpFormValues = {
      ...form,
    };
    console.log("SIGN UP:", payload);
  };

  const resetForm = () => {
    setForm(defaultFormValues);
  };

  return {
    form,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
