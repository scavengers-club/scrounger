import React from 'react';

//this will be a shared file, called when a user creates a new adventure (empty),
//and also called when a user clicks to edit their adventure(filled with specific info)

export default function AdventureForm() {
  return (
    <form>
      <label>
        <input type="text" placeholder="name" />
      </label>
      <label>
        <input type="text" placeholder="image" />
      </label>
      <label>
        <input type="text" placeholder="description" />
      </label>
      <label>
        <input type="text" placeholder="hint 1" />
      </label>
      <label>
        <input type="text" placeholder="hint 2" />
      </label>
      <label>
        <input type="text" placeholder="hint 3" />
      </label>
      <label>
        <input type="text" placeholder="solution" />
      </label>
    </form>
  );
}
