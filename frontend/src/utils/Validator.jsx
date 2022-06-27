import { useState } from 'react';

const useFormValidation = (inputs) => {
  const [values, setValues] = useState(inputs);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const { value } = input;
    const { name } = input;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  };

  return { values, handleChange, errors, isValid };
};
export default useFormValidation;
