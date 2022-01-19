import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getAdventureById } from '../../services/adventures';

export default function Adventure() {
  const [adventure, setAdventure] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAdventureById(id);
      setAdventure(resp);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <h3>{adventure.name}</h3>
      <img width="400px" src={adventure.image} />
      <h3>{adventure.description}</h3>
      <ol>
        <li>{adventure.hint_1}</li>
        <li>{adventure.hint_2}</li>
        <li>{adventure.hint_3}</li>
      </ol>
      <h3>{adventure.solution}</h3>
    </div>
  );
}
