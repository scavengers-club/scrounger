import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserAdventures } from '../../services/adventures';
import AdventureList from '../../components/AdventureList/AdventureList';
import './Profile.css';

export default function Profile({ currentUser }) {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = currentUser.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserAdventures(userId);
      setAdventures(data);
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  if (loading) return <h1>loading</h1>;

  return (
    <div className="profile">
      <h1 className="profile-header">Here are your adventures, {currentUser.username}</h1>
      <Link to="/adventure/create">create new adventure</Link>
      {adventures.length === 0 ? <p>You have no adventures yet...</p> : null}
      <AdventureList {...{ adventures }} />
    </div>
  );
}
