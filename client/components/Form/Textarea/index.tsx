import React from 'react';
import { StyledTextarea } from './styles';
import { Label, Container } from '../Input/styles';

interface TextAreaProps {
  label: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ label, name, handleChange }: TextAreaProps) => (
  <Container>
    {label && <Label htmlFor={name}>{label}</Label>}
    <StyledTextarea name={name} onChange={handleChange} />
  </Container>
);

export { Textarea };
