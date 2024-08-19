import React from "react";
import "./TextField.css"
const TextField = ({
  value,
  onChange = () => {},
  onBlur = () => {},
  error,
  label,
  name,
  containerClass,
  placeholder,
  type = "text",
  disabled,
  className,
  ...props
}) => {
  return (
    <div className="">
      {label && (
        <label className={` `} htmlFor={name}>
          {label}
        </label>
      )}
      <div className="textfield">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
         
          disabled={disabled}
          {...props}
          className={` 
       
            ${className || ""}
            ${error ? " error-field " : ""}
            ${disabled ? "disabled" : ""}
      `}
        />
      </div>
      {error ? <div className={``}>{error}</div> : null}
    </div>
  );
};

export { TextField };
