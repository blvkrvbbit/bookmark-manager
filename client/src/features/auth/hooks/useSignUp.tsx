import { useState, type ChangeEvent, type SubmitEvent } from "react";
import api from "../../../lib/api";

type SignUpFormValues = {
  fullName: string;
  email: string;
  password: string;
};

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

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: SignUpFormValues = {
      ...form,
    };

    const res = await api.post("/auth/sign-up", payload);
    console.log(res.data);
  };

  const resetForm = () => {
    setForm(defaultFormValues);
  };

  return { form, handleChange, handleSubmit, resetForm };
};
