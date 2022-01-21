import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../services/users';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function Register({ setCurrentUser, avatars }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [checked, setChecked] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checked) {
      const resp = await registerUser(email, password, username, selectedAvatar);
      setCurrentUser(resp);
      history.push('/scoutshonor');
    } else {
      alert(
        `You must be over the age of 13 to use this app - check the box to continue if you are 13 or over.`
      );
    }
  };

  return (
    <div>
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
