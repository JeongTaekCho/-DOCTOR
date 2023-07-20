import React from 'react';
import { Input } from './style';

interface inputProps {
  type: string;
  onChange: () => void;
  autoComplete?: string;
}

const FormInput = ({ type, onChange, autoComplete }: inputProps) => {
  return <Input type={type} autoComplete={autoComplete} onChange={onChange} />;
};

export default FormInput;
