import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h1>Hi I am Profile</h1>
      <Link exact to="/adventure/create">
        create new adventure
      </Link>
    </div>
  );
}
