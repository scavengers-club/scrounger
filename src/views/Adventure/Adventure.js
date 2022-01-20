import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { getAdventureById, deleteAdventureById } from '../../services/adventures';
import AdventureDetail from '../../components/AdventureDetail/AdventureDetail';

export default function Adventure({ currentUser }) {
  const [adventure, setAdventure] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAdventureById(id);
      setAdventure(resp);
    };
    fetchData();
  }, [id]);

  const handleEdit = async () => {
    history.push(`/adventure/${id}/edit`);
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this adventure?')) {
      try {
        await deleteAdventureById(id);
        alert('Adventure was successfully deleted.');
        history.push('/profile');
      } catch {
        alert('something went wrong!');
      }
    }
  };

  return <AdventureDetail {...adventure} {...{ currentUser, handleDelete, handleEdit }} />;
}
