import { useState, useEffect } from 'react';
import { getAdventures } from '../../services/adventures';
import AdventureList from '../../components/AdventureList/AdventureList';

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
      <img className="logo" src={`${process.env.PUBLIC_URL}/example-logo.png`} />

      {!currentUser && (
        <p>
          This is a description of the app for those who do not have an account or are not logged in
          to see
        </p>
      )}
      {currentUser && <h2>Welcome back, {currentUser.username}!</h2>}
      <AdventureList {...{ adventures }} />
    </div>
  );
}
