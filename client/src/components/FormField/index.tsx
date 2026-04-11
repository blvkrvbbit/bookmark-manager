import classes from "./FormField.module.scss";
import type { FormFieldProps } from "./types";

const FormField = ({
  id,
  label,
  required = false,
  ...props
}: FormFieldProps) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor={id}>
        {label}
        {required && (
          <span className={classes.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input id={id} {...props} />
    </div>
  );
};

export default FormField;
