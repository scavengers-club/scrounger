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
    <form>
      <div className="form-control">
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
      </div>

      <div className="form-control">
        <label>
          image:
          <input
            type="file"
            alt={name}
            onChange={(e) => {
              if (e.target.files[0]) {
                setNewImage(e.target.files[0]);
                updateAdventure('image', e.target.files[0]);
              }
            }}
          />
        </label>
        <img src={image} />
      </div>
      <div className="form-control">
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
      </div>
      <div className="form-control">
        <label>
          hint 1:
          <input
            required
            value={hint_1}
            onChange={(e) => {
              updateAdventure('hint_1', e.target.value);
            }}
            type="text"
            placeholder="hint 1"
          />
        </label>
      </div>
      <div className="form-control">
        <label>
          hint 2:
          <input
            required
            value={hint_2}
            onChange={(e) => {
              updateAdventure('hint_2', e.target.value);
            }}
            type="text"
            placeholder="hint 2"
          />
        </label>
      </div>
      <div className="form-control">
        <label>
          hint 3:
          <input
            required
            value={hint_3}
            onChange={(e) => {
              updateAdventure('hint_3', e.target.value);
            }}
            type="text"
            placeholder="hint 3"
          />
        </label>
      </div>
      <div className="form-control">
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
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
