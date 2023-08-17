import React from 'react';
import { Input } from './style';

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = ({ type, onChange, autoComplete, placeholder }: inputProps) => {
  return (
    <Input type={type} autoComplete={autoComplete} onChange={onChange} placeholder={placeholder} />
  );
};

export default FormInput;
