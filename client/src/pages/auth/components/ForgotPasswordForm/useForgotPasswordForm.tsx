import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import type { ForgotPasswordFormValues } from "./types";
import api from "../../../../lib/api";

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

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...form,
    };
    console.log(payload);
    const res = await api.post("/auth/forgot-password", payload);
    console.log(res.data);
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
