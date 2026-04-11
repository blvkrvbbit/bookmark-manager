import type { ChangeEventHandler, InputHTMLAttributes } from "react";

export type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;
