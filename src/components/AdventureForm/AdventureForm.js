import './AdventureForm.css';

export default function AdventureForm({
  updateAdventure,
  handleSubmit,
  setNewImage,
  name,
  description,
  image,
  hint_1,
  hint_2,
  hint_3,
  solution,
}) {
  return (
    <form className="adventure-form">
      <label>
        name:
        <input
          required
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
          alt={name}
          onChange={(e) => {
            if (e.target.files[0]) {
              {
                setNewImage ? setNewImage(e.target.files[0]) : null;
              }
              updateAdventure('image', e.target.files[0]);
            }
          }}
        />
      </label>
      <img src={image} />

      <label>
        description:
        <textarea
          required
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
        <textarea
          required
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
        <textarea
          required
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
        <textarea
          required
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
          required
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
