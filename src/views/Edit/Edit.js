import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdventureForm from '../../components/AdventureForm/AdventureForm';
import { deleteAdventureById, editAdventure, getAdventureById } from '../../services/adventures';

export default function Edit({ currentUser }) {
  const [adventure, setAdventure] = useState({});
  const userId = currentUser.id;
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdventureById(params.id);
      setAdventure(data);
    };
    fetchData();
  }, [params.id]);

  const updateAdventure = (key, value) => {
    adventure[key] = value;
    setAdventure({ ...adventure, user_id: userId });
  };

  const deleteAdventure = async () => {
    try {
      await deleteAdventureById(params.id);
      alert('adventure deleted');
    } catch {
      alert('something went wrong!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editAdventure(adventure);
      confirm('are you ready to submit this adventure?');
      //history.push(`/user/${currentUser.id}`);
    } catch {
      alert('something went wrong!');
    }
  };

  return (
    <div>
      <AdventureForm {...adventure} {...{ updateAdventure, handleSubmit, deleteAdventure }} />
    </div>
  );
}
