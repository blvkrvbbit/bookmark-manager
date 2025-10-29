import type { ChangeEvent } from "react";
import "./Input.css";

type Props = {
  label?: string;
  icon?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  name: string;
  type?: string;
  required?: boolean;
};

const Input = ({
  label,
  icon,
  className,
  placeholder,
  hint,
  onChange,
  name,
  type,
  required,
}: Props) => {
  return (
    <div className="form-group">
      {label && (
        <label className="input-label text-preset-4-semibold">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <div className="input-container">
        <input
          className={`${className ? className : ""} text-preset-4-medium ${
            icon && "with-icon"
          }`}
          onChange={onChange}
          placeholder={placeholder && placeholder}
          name={name}
          type={type}
        />
        {hint && (
          <p className="text-preset-4-medium hint">
            This is a hint text to help user.
          </p>
        )}
        {icon && <img className="icon" src={icon} alt="icon" />}
      </div>
    </div>
  );
};

export default Input;
