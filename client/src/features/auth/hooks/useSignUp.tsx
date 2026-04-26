import { useState, type ChangeEvent, type SubmitEvent } from "react";

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

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const resetForm = () => {
    setForm(defaultFormValues);
  };

  return { form, handleChange, handleSubmit, resetForm };
};
