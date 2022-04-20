import type { NextPage } from 'next';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const Signup: NextPage = () => {
  const form = useForm({
    initialValues: { email: '', password: '' },
    validate: {
      email: (value) => (value ? null : 'Must not be empty'),
      password: (value) => (value ? null : 'Must not be empty'),
    },
  });

  const onClick = async () => {
    const body = {
      ...form.values,
    };
    const res = await fetch('http://localhost:3000/auth/signup', {
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
    });
    console.log(await res.json());
  };

  return (
    <>
      <TextInput
        placeholder='email'
        required
        {...form.getInputProps('email')}
      />
      <TextInput
        placeholder='password'
        required
        {...form.getInputProps('password')}
      />
      <Button onClick={onClick}>Submit</Button>
    </>
  );
};

export default Signup;
