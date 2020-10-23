import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignForm from "./signForm";
import UseForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";
//import PropTypes from "prop-types";

const SignForms = () => {
  const { handleChange, handleSubmit, errors } = UseForm(validateForm);

  const forms = [
    <SignForm
      label="Username:"
      name="username"
      type="text"
      onChange={handleChange}
      placeholder="Enter username..."
      required
      className="input"
      value=""
      key="1"
      error={errors.username}
    />,
    <SignForm
      label="Email:"
      name="email"
      type="text"
      onChange={handleChange}
      placeholder="Enter email"
      required
      className="input"
      value=""
      key="2"
      error={errors.email}
    />,
    <SignForm
      label="Password:"
      name="password"
      type="password"
      onChange={handleChange}
      placeholder="Enter password"
      required
      className="input"
      value=""
      key="3"
      error={errors.password}
    />,
    <SignForm
      label="Confirm Password:"
      name="confirmPassword"
      type="password"
      onChange={handleChange}
      placeholder="Enter password"
      required
      className="input"
      value=""
      key="4"
      error={errors.confirmPassword}
    />,
  ];

  return (
    <div className="container-fluid">
      <h1>Formulario de registro </h1>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">{forms.map((f) => f)}</div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignForms;
