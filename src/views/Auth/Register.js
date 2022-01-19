import React, { useState } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { registerUser } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function Register({ setCurrentUser, avatars }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    if (checked) {
      e.preventDefault();
      const resp = await registerUser(email, password, username, selectedAvatar);
      setCurrentUser(resp);
      history.push('/scoutshonor');
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
          avatars,
          setSelectedAvatar,
          handleSubmit,
        }}
      />
    </div>
  );
}
