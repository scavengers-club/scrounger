import React, { useState } from 'react';
import LogInForm from '../../components/LogInForm/LogInForm';
import { logInUser } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function LogIn({ setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //figure out how to take username instead of email
    const resp = await logInUser(email, password);
    setCurrentUser(resp);
    history.push('/');
  };

  return (
    <div>
      <h1>Log In</h1>
      <LogInForm
        {...{ email, setEmail, username, setUsername, password, setPassword, handleSubmit }}
      />
    </div>
  );
}
