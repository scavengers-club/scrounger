import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './ScoutsHonor.css';

export default function ScoutsHonor() {
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const handleSubmit = async () => {
    if (checked) {
      history.push('/');
    } else {
      alert('you must agree to scouts honor');
    }
  };

  return (
    <div>
      <p>
        Please be respectful of others and property. Leave things as you find them. Be responsible
        if using this app after dark. Carry a mask so as to keep yourself and others safe. If you
        are adventuring alone, make sure someone knows where you are. Happy Adventuring!
      </p>
      <label>
        <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
        <span>I have read and agree to the Scouts Honor Pledge</span>
      </label>
      <button onClick={handleSubmit}>Lets Explore</button>
    </div>
  );
}
