import { useState, type ChangeEvent, type SubmitEvent } from "react";

type ForgotPasswordFormValues = {
  email: string;
};

const defaultFormValues: ForgotPasswordFormValues = {
  email: "",
};

export const useForgotPasswordForm = () => {
  const [form, setForm] = useState<ForgotPasswordFormValues>(defaultFormValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof ForgotPasswordFormValues;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
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
