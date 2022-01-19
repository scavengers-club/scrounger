import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import AdventureDetail from '../../components/AdventureDetail/AdventureDetail';
import { getAdventureById, deleteAdventureById } from '../../services/adventures';

export default function Adventure({ currentUser }) {
  const [adventure, setAdventure] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAdventureById(id);
      setAdventure(resp);
    };
    fetchData();
  }, [id]);

  const handleEdit = async () => {
    history.push(`/adventure/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteAdventureById(id);
      alert('adventure deleted');
      history.push('/profile');
    } catch {
      alert('something went wrong!');
    }
  };

  console.log(adventure);

  return <AdventureDetail {...adventure} {...{ currentUser, handleDelete, handleEdit }} />;
}
