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
  return (
    <div>
      <h2>Scrounger</h2>
      <p>
        This is a description of the app for those who do not have an account or are not logged in
        to see
      </p>
      <div className="adventure-list">
        {adventures.map((adventure) => (
          <div key={adventure.id}>
            <h3>{adventure.name}</h3>
            <img src={adventure.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
