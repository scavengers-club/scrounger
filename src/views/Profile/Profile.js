import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdventureList from '../../components/AdventureList/AdventureList';
import { getUserAdventures } from '../../services/adventures';

export default function Profile({ currentUser }) {
  const [adventures, setAdventures] = useState([]);
  const userId = currentUser.id;
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = getUserAdventures(userId);
      setAdventures(data);
    };
    fetchData();
  }, [userId]);

  return (
    <div>
      <h1>Hi I am Profile</h1>
      <AdventureList {...{ adventures }} />
      <Link exact to="/adventure/create">
        create new adventure
      </Link>
    </div>
  );
}
