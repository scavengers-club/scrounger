import React, { useState, useEffect } from 'react';
import { getAdventures } from '../../services/adventures';

export default function Home() {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAdventures();
      setAdventures(resp);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(adventures);
  return <div></div>;
}
