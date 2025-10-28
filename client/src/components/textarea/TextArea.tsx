import "./TextArea.css";

type Props = {
  label?: string;
  icon?: string;
  className?: string;
  placeholder?: string;
  hint?: string;
};

const TextArea = ({ label, icon, className, placeholder, hint }: Props) => {
  return (
    <div>
      {label && (
        <label className="textarea-label text-preset-4-semibold">
          {label} <span className="required">*</span>
        </label>
      )}
      <div className="textarea-container">
        <textarea
          className={`${className ? className : ""} text-preset-4-medium`}
          placeholder={placeholder && placeholder}
        ></textarea>
        <div className="textarea-footer">
          {hint && (
            <p className="text-preset-4-medium hint">
              This is a hint text to help user.
            </p>
          )}
          <div className="count text-preset-5-medium">0/280</div>
        </div>
        {icon && <img className="icon" src={icon} alt="icon" />}
      </div>
    </div>
  );
};

export default TextArea;
