import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import withSession from '../util/session';
import { Input, Form, Textarea } from '../components/Form';
import { Text } from '../components/Text';
import { Button } from '../components/Button/styles';
import { useRouter } from 'next/router';

const LoginPage = ({ isLoggedIn }) => {
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = Object.fromEntries(
        new FormData(e.currentTarget).entries()
      );
      await axios.post('http://localhost:3000/api/login', formData);
      router.push('/');
    } catch (error) {
      alert('fuck off');
    }
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
    if (errors[e.target.name]) {
      setErrors((errs) => ({
        ...errs,
        [e.target.name]: false,
      }));
    }
  }

  const inputs = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      handleChange,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      handleChange,
      autoComplete: 'current-password',
    },
  ];
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Text white as="h6" underline>
          Login
        </Text>
        {inputs.map((field, idx) => (
          <Input key={idx} error={errors[field.name]} {...field} />
        ))}
        <Button type="submit" secondary>
          Submit
        </Button>
      </Form>
    </>
  );
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  const { isLoggedIn } = req.session.get('user') || { isLoggedIn: false };
  try {
    if (isLoggedIn) {
      res.writeHead(302, { Location: '/' });
      return res.end();
      return {
        props: {
          isLoggedIn: true,
        },
      };
    }
    return {
      props: {
        isLoggedIn,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
});

export default LoginPage;
