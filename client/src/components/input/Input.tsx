import "./input.styles.css";

type Props = {
  label?: string;
  icon?: string;
  className?: string;
  placeholder?: string;
  hint?: string;
};

const Input = ({ label, icon, className, placeholder, hint }: Props) => {
  return (
    <div>
      {label && (
        <label className="input-label text-preset-4-semibold">
          {label} <span className="required">*</span>
        </label>
      )}
      <div className="input-container">
        <input
          className={`${className ? className : ""} text-preset-4-medium`}
          placeholder={placeholder && placeholder}
          type="text"
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
