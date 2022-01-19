import React from 'react';
import { Link } from 'react-router-dom';

//this will render all of the adventures onto to home page

export default function AdventureList({ adventures }) {
  return (
    <div className="adventure-list">
      {adventures.map((adventure) => (
        <div key={adventure.id}>
          <Link to={`/adventure/${adventure.id}`}>
            <h3>{adventure.name}</h3>
            <img width="400px" src={adventure.image} />
          </Link>
        </div>
      ))}
    </div>
  );
}
