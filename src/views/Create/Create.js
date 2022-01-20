import { useState } from 'react';
import { useHistory } from 'react-router';
import { createAdventure } from '../../services/adventures';
import AdventureForm from '../../components/AdventureForm/AdventureForm';

export default function Create({ currentUser }) {
  const [adventure, setAdventure] = useState({});

  const history = useHistory();
  const userId = currentUser.id;

  const updateAdventure = (key, value) => {
    adventure[key] = value;
    setAdventure({ ...adventure, user_id: userId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirm('Create this new adventure?')) {
      try {
        await createAdventure(adventure);
        alert('Your new adventure awaits!');
        history.push('/profile');
      } catch {
        alert('something went wrong!');
      }
    }
  };

  return (
    <div>
      <AdventureForm {...{ updateAdventure, handleSubmit }} />
    </div>
  );
}
