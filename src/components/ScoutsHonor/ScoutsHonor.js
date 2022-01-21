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
      alert(`You must agree to the Scout's Honor Pledge`);
    }
  };

  return (
    <div className="scout-text">
      <h3>Getting Started</h3>
      <p>
        Once you have agreed to the Scout&apos;s Honor click on the button at the bottom of this
        page to begin.
      </p>
      <p>
        The homepage will reveal all of the adventures available to you - click on an adventure to
        view its details. Follow the hints to discover new sights and places. Want to create a new
        adventure? Head to your profile by selecting your avatar and get to creating!
      </p>
      <h3>Scout&apos;s Honor Pledge</h3>
      <p>
        Please be respectful of others and property. Leave things as you find them. Be responsible
        if using this app after dark. Carry a mask so as to keep yourself and others safe. If you
        are adventuring alone, make sure someone knows where you are. Be sure to keep your phone
        charged.
      </p>
      <p>Happy Adventuring!</p>
      <div className="lets-explore">
        <label>
          <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
          <span>I have read and agree to the Scouts Honor Pledge</span>
        </label>
        <button className="scout-button" onClick={handleSubmit}>
          Lets Explore
        </button>
      </div>
    </div>
  );
}
