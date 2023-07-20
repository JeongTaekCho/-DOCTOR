import React, { MouseEvent } from 'react';
import { Button } from './style';

interface buttonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  disabled?: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

const FormButton = ({ type, text, disabled, onClick }: buttonProps) => {
  return (
    <Button type={type} disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
};

export default FormButton;
