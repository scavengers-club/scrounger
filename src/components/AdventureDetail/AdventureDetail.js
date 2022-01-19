import React from 'react';

//this will be a shared filed, used for displaying info when clicked on home page,
//as well as when a user clicks on their created adventures

export default function AdventureDetail({
  name,
  image,
  description,
  hint_1,
  hint_2,
  hint_3,
  solution,
}) {
  return (
    <div>
      <h3>{name}</h3>
      <img width="400px" src={image} />
      <h3>{description}</h3>
      <ol>
        <li>{hint_1}</li>
        <li>{hint_2}</li>
        <li>{hint_3}</li>
      </ol>
      <h3>{solution}</h3>

      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
