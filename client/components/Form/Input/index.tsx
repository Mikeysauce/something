import React from 'react';
import { StyledInput, Label, Container } from './styles';

interface InputProps {
  label: string;
  type?: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  autoComplete?: string;
}

const Input = ({
  label,
  type = 'text',
  name,
  handleChange,
  error,
  autoComplete,
}: InputProps) => (
  <Container>
    {label && (
      <Label htmlFor={name} hasError={error}>
        {label}
      </Label>
    )}
    <StyledInput
      name={name}
      type={type}
      onChange={handleChange}
      autoComplete={autoComplete}
    />
  </Container>
);

export { Input };
