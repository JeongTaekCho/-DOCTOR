import React from 'react';
import { Button } from './style';

interface buttonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const FormButton = ({ type, text, disabled, onClick }: buttonProps) => {
  return (
    <Button type={type} disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
};

export default FormButton;
