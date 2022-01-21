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
      <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} />

      {!currentUser && (
        <p className="message-box">
          Welcome explorer! We&apos;re here to guide you on real-world adventures. Scrounger
          encourages you to explore, discover the world, and cultivate community by creating shared
          experiences.
        </p>
      )}
      {currentUser && <h3 className="message-box">Welcome back, {currentUser.username}!</h3>}
      <AdventureList {...{ adventures }} />
    </div>
  );
}
