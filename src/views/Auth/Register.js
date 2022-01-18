import React, { useState, useEffect } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function Register({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {});
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
}
