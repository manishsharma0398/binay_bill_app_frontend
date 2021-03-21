import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  required,
  error,
}) => {
  return (
    <div className="row">
      <label htmlFor={id} className="form-label mb-1">
        <h6 className="mb-0 text-sm">{label}</h6>
      </label>
      <div className="input-group">
        <input
          type={type}
          className={`form-control ${
            error && typeof error !== "undefined" ? " is-invalid" : ""
          }`}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />

        {error && typeof error !== "undefined" && (
          <div className="invalid-feedback">{error}</div>
        )}

        {/* <div id={id + "Help"} className="form-text">
        We'll never share your email with anyone else.
      </div> */}
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  required: false,
  error: "",
};

TextInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default TextInput;
