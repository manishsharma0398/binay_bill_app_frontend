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
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {/* <div id={id + "Help"} className="form-text">
        We'll never share your email with anyone else.
      </div> */}
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  required: false,
};

TextInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default TextInput;
