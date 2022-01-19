import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { createAdventure } from '../../services/adventures';

// import { uploadAdventureImage } from '../../services/adventures';

export default function Create({ currentUser }) {
  const [adventure, setAdventure] = useState({});
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAdventure(adventure);
      confirm('are you ready to submit this adventure?');
      history.push(`/user/${currentUser.id}`);
    } catch {
      alert('something went wrong!');
    }
  };
  //   const uploadFile = (e) => {
  //     uploadAdventureImage(currentUser.id, e.target.files[0]);
  //   };

  return <div></div>;
}
