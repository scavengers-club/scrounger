import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { editAdventure, getAdventureById } from '../../services/adventures';
import AdventureForm from '../../components/AdventureForm/AdventureForm';

export default function Edit({ currentUser }) {
  const [adventure, setAdventure] = useState({});

  const { id } = useParams();
  const history = useHistory();
  const userId = currentUser.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdventureById(id);
      setAdventure(data);
    };
    fetchData();
  }, [id]);

  const updateAdventure = (key, value) => {
    adventure[key] = value;
    setAdventure({ ...adventure, user_id: userId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirm('Update the current adventure?')) {
      try {
        await editAdventure(adventure);
        alert('Adventure updated successfully.');
        history.push('/profile');
      } catch {
        alert('something went wrong!');
      }
    }
  };

  return (
    <div>
      <AdventureForm {...adventure} {...{ updateAdventure, handleSubmit }} />
    </div>
  );
}
