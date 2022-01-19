import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AdventureForm from '../../components/AdventureForm/AdventureForm';
import { editAdventure, getAdventureById } from '../../services/adventures';

export default function Edit({ currentUser }) {
  const [adventure, setAdventure] = useState({});
  const userId = currentUser.id;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdventureById(id);
      setAdventure(data);
    };
    fetchData();
  }, [id]);

  const updateAdventure = (key, value) => {
    adventure[key] = value;
    setAdventure({ ...adventure, user_id: userId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editAdventure(adventure);
      confirm('are you ready to submit this adventure?');
      history.push('/profile');
    } catch {
      alert('something went wrong!');
    }
  };

  return (
    <div>
      <AdventureForm {...adventure} {...{ updateAdventure, handleSubmit }} />
    </div>
  );
}
