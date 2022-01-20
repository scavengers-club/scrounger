import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logInUser } from '../../services/users';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function LogIn({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await logInUser(email, password);
    setCurrentUser(resp);
    history.push('/');
  };

  return (
    <div>
      <LogInForm {...{ email, setEmail, password, setPassword, handleSubmit }} />
    </div>
  );
}
