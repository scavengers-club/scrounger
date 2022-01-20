import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AdventureForm from '../../components/AdventureForm/AdventureForm';
import { createAdventure } from '../../services/adventures';

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
    try {
      await createAdventure(adventure);
      confirm('are you ready to submit this adventure?');
      history.push('/profile');
    } catch {
      alert('something went wrong!');
    }
  };

  return (
    <div>
      <AdventureForm {...{ updateAdventure, handleSubmit }} />
    </div>
  );
}
