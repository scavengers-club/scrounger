import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import AdventureDetail from '../../components/AdventureDetail/AdventureDetail';
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
  return <AdventureDetail {...adventure} />;
}
