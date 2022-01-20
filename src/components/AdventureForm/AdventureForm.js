import React from 'react';

//this will be a shared file, called when a user creates a new adventure (empty),
//and also called when a user clicks to edit their adventure(filled with specific info)

export default function AdventureForm({
  updateAdventure,
  handleSubmit,
  name,
  description,
  image,
  hint_1,
  hint_2,
  hint_3,
  solution,
}) {
  return (
    <form>
      <label>
        name:
        <input
          value={name}
          onChange={(e) => {
            updateAdventure('name', e.target.value);
          }}
          type="text"
          placeholder="name"
        />
      </label>
      <label>
        image:
        <input
          type="file"
          src={image}
          onChange={(e) => {
            updateAdventure('image', e.target.files[0]);
          }}
        />
      </label>
      <label>
        description:
        <textarea
          value={description}
          onChange={(e) => {
            updateAdventure('description', e.target.value);
          }}
          type="text"
          placeholder="description"
        />
      </label>
      <label>
        hint 1:
        <input
          value={hint_1}
          onChange={(e) => {
            updateAdventure('hint_1', e.target.value);
          }}
          type="text"
          placeholder="hint 1"
        />
      </label>
      <label>
        hint 2:
        <input
          value={hint_2}
          onChange={(e) => {
            updateAdventure('hint_2', e.target.value);
          }}
          type="text"
          placeholder="hint 2"
        />
      </label>
      <label>
        hint 3:
        <input
          value={hint_3}
          onChange={(e) => {
            updateAdventure('hint_3', e.target.value);
          }}
          type="text"
          placeholder="hint 3"
        />
      </label>
      <label>
        solution:
        <input
          value={solution}
          onChange={(e) => {
            updateAdventure('solution', e.target.value);
          }}
          type="text"
          placeholder="solution"
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
