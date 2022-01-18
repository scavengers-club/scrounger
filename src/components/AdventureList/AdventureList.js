import React from 'react';

//this will render all of the adventures onto to home page

export default function AdventureList({ adventures }) {
  return (
    <div className="adventure-list">
      {adventures.map((adventure) => (
        <div key={adventure.id}>
          <h3>{adventure.name}</h3>
          <img src={adventure.image}></img>
        </div>
      ))}
    </div>
  );
}
