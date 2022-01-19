import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  checked,
  setChecked,
  handleSubmit,
}) {
  return (
    <>
      <form>
        <label>
          username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="make it unique"
          />
        </label>
        <label>
          email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="make it strong"
          />
        </label>

        {/* check if input value === password */}
        {/* <label>
          re-enter password:
          <input type="password" />
        </label> */}

        <label>
          <input type="checkbox" isChecked={checked} onChange={() => setChecked(!checked)} />
          <span>I am over the age of 13</span>
        </label>
        <button onClick={handleSubmit}>Register</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Log In</Link>
    </>
  );
}
