import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../../lib/api";

type ResetPasswordFormValues = {
  password: string;
  confirmPassword: string;
  token: string | null;
};

const defaultFormValues: ResetPasswordFormValues = {
  password: "",
  confirmPassword: "",
  token: null,
};

export const useResetPassword = () => {
  const [form, setForm] = useState<ResetPasswordFormValues>(defaultFormValues);

  const [searchParams] = useSearchParams();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof ResetPasswordFormValues;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: ResetPasswordFormValues = {
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
