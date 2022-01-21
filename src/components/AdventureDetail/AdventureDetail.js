import './AdventureDetail.css';

export default function AdventureDetail({
  name,
  image,
  description,
  hint_1,
  hint_2,
  hint_3,
  solution,
  currentUser,
  user_id,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="adventure-detail">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <h4>Description:</h4>
      <p>{description}</p>
      <p>Hint 1: {hint_1}</p>
      <p>Hint 2: {hint_2}</p>
      <p>Hint 3: {hint_3}</p>

      <h4>Solution: {solution}</h4>

      {currentUser.id === user_id && (
        <div className="detail-buttons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
