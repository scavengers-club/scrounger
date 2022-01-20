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
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <h3>{description}</h3>
      <ol>
        <li>{hint_1}</li>
        <li>{hint_2}</li>
        <li>{hint_3}</li>
      </ol>
      <h3>{solution}</h3>

      {currentUser.id === user_id && (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
