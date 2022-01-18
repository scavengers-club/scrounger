import React, { useState } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { registerUser } from '../../services/users';

export default function Register({ setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e) => {
    if (checked) {
      e.preventDefault();
      const resp = await registerUser(email, password);
      setCurrentUser(resp);
    } else {
      alert('you must check that box');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm
        {...{
          username,
          setUsername,
          email,
          setEmail,
          password,
          setPassword,
          checked,
          setChecked,
          handleSubmit,
        }}
      />
    </div>
  );
}
