import { useState, type ChangeEvent, type SubmitEvent } from "react";
import type { FormValues } from "./types";
import type { ForgotPasswordFormValues } from "../ForgotPasswordForm/types";
import api from "../../../../lib/api";
import { useSearchParams } from "react-router-dom";

const defaultFormValues: FormValues = {
  password: "",
  confirmPassword: "",
};

export const useResetPasswordForm = () => {
  const [form, setForm] = useState<FormValues>(defaultFormValues);
  const [searchParams] = useSearchParams();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormValues;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    const token = searchParams.get("token");

    const payload: FormValues = {
      ...form,
      token: searchParams.get("token"),
    };

    const res = await api.post("/auth/reset-password", payload);
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
