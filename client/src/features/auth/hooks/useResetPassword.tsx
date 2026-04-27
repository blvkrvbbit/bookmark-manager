import { useState, type ChangeEvent, type SubmitEvent } from "react";

type ResetPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

const defaultFormValues: ResetPasswordFormValues = {
  password: "",
  confirmPassword: "",
};

export const useResetPassword = () => {
  const [form, setForm] = useState<ResetPasswordFormValues>(defaultFormValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof ResetPasswordFormValues;
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
