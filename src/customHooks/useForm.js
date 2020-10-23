import { useState } from "react";

const useForm = (validateForm) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (evt) => {
    //console.log("pasa")
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
    //console.log(values);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values));
  };
  return { handleChange, handleSubmit, errors };
};

export default useForm;
