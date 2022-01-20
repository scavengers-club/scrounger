import React from 'react';
import { Link } from 'react-router-dom';
import './AdventureList.css';

//this will render all of the adventures onto to home page

export default function AdventureList({ adventures }) {
  return (
    <div className="adventure-list">
      {adventures.map((adventure) => (
        <div className="adventure-card" key={adventure.id}>
          <Link className="list-link" to={`/adventure/${adventure.id}`}>
            <h3 className="list-title">{adventure.name}</h3>
            <img className="list-img" src={adventure.image} />
          </Link>
        </div>
      ))}
    </div>
  );
}
