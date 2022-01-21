import { Link } from 'react-router-dom';

import './RegisterForm.css';

export default function RegisterForm({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  checked,
  setChecked,
  avatars,
  setSelectedAvatar,
  handleSubmit,
}) {
  return (
    <>
      <form className="register-form">
        <label className="register-input">
          username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="make it unique"
          />
        </label>
        <label className="register-input">
          email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="make it real"
          />
        </label>
        <label className="register-input">
          password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="make it strong"
          />
        </label>

        <fieldset>
          <legend>Avatar:</legend>
          <label>
            <input
              type="radio"
              name="avatar"
              value={avatars[0]}
              onChange={(e) => setSelectedAvatar(e.target.value)}
            />
            <img src={`${process.env.PUBLIC_URL}/avatars/${avatars[0]}`} />
          </label>
          <label>
            <input
              type="radio"
              name="avatar"
              value={avatars[1]}
              onChange={(e) => setSelectedAvatar(e.target.value)}
            />
            <img src={`${process.env.PUBLIC_URL}/avatars/${avatars[1]}`} />
          </label>
          <label>
            <input
              type="radio"
              name="avatar"
              value={avatars[2]}
              onChange={(e) => setSelectedAvatar(e.target.value)}
            />
            <img src={`${process.env.PUBLIC_URL}/avatars/${avatars[2]}`} />
          </label>
          <label>
            <input
              type="radio"
              name="avatar"
              value={avatars[3]}
              onChange={(e) => setSelectedAvatar(e.target.value)}
            />
            <img src={`${process.env.PUBLIC_URL}/avatars/${avatars[3]}`} />
          </label>
        </fieldset>

        <label>
          <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
          <span>I am over the age of 13</span>
        </label>

        <button className="register-button" onClick={handleSubmit}>
          Register
        </button>
      </form>
      <div className="redirect">
        <p>Already have an account?</p>
        <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
