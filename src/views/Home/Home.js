import React, { useState, useEffect } from 'react';
import AdventureList from '../../components/AdventureList/AdventureList';
import { getAdventures } from '../../services/adventures';

export default function Home({ currentUser }) {
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

  if (loading) return <h1>grabbing adventures...</h1>;

  return (
    <div>
      {!currentUser && (
        <>
          <h2>Scrounger</h2>
          <p>
            This is a description of the app for those who do not have an account or are not logged
            in to see
          </p>
        </>
      )}
      {currentUser && (
        <>
          <h2>Welcome back!</h2>
        </>
      )}
      <AdventureList {...{ adventures }} />
    </div>
  );
}
