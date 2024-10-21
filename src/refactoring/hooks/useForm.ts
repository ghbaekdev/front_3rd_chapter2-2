import { useState } from 'react';

const useForm = <T>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return { formState, handleInputChange, handleSelectChange, resetForm };
};

export default useForm;
