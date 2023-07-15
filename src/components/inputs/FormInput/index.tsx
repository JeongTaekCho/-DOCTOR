import React from 'react';
import { Input } from './style';

interface inputProps {
  type: string;
  onChange: () => void;
}

const FormInput = ({ type, onChange }: inputProps) => {
  return <Input type={type} onChange={onChange} />;
};

export default FormInput;
