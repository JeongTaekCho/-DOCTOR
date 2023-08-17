import React from 'react';
import { Button } from './style';

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const FormButton = ({ type, text, disabled, onClick }: buttonProps) => {
  return (
    <Button type={type} disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
};

export default FormButton;
