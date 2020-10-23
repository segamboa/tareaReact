import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const SignForm = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) => {
  return (
    <React.Fragment>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        //value={value}
        className={className}
      />
      {error && <p>ERROR: {error}</p>}
    </React.Fragment>
  );
};

SignForm.defaultProps = {
  type: "text",
  className: "",
};

SignForm.propTypes = {
  name: PropTypes.string.isRequired,
  //type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default SignForm;
