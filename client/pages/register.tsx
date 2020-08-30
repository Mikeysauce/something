import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Form, Textarea } from '../components/Form';
import { Text } from '../components/Text';
import { Button } from '../components/Button/styles';
import { Page } from '../components/Page/Page';

const RegisterPage = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );
    await axios.post('http://localhost:8000/users/register', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    const errorLen = Object.keys(errors).length;
    console.log(errorLen);
    if (errorLen > 0) {
      console.log('oops');
    }
  }, [errors]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(e.target);
    if (errors[e.target.name]) {
      setErrors((errs) => ({
        ...errs,
        [e.target.name]: false,
      }));
    }
  }

  const inputs = [
    {
      name: 'first_name',
      label: 'First name',
      type: 'text',
      handleChange,
    },
    {
      name: 'last_name',
      label: 'Surname',
      type: 'text',
      handleChange,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      handleChange,
      autoComplete: 'new-password',
    },
    {
      name: 'passwordConfirm',
      label: 'Confirm password',
      type: 'password',
      handleChange,
      autoComplete: 'new-password',
    },
    {
      name: 'phone',
      label: 'Phone number',
      type: 'telephone',
      handleChange,
    },
    {
      name: 'email',
      label: 'Email address',
      type: 'email',
      handleChange,
    },
  ];
  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <Text white as="h6" underline>
          Register
        </Text>
        {inputs.map((field, idx) => (
          <Input key={idx} error={errors[field.name]} {...field} />
        ))}
        <Textarea
          name="address"
          label="Address"
          handleChange={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        />
        <Button type="submit" secondary>
          Submit
        </Button>
      </Form>
    </Page>
  );
};

export default RegisterPage;
