import { useState } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (ev) => {
    setValues((oldValues) => ({
      ...oldValues,
      [ev.target.name]: ev.target.value,
    }));
  };

  return {
    values,
    changeHandler,
    setValues,
  };
}