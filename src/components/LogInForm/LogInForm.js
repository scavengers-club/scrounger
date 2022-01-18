import React from 'react';
import { Link } from 'react-router-dom';

//this will be the form a returning user sees
//will ask for username and password

export default function LogInForm({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
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
            placeholder="enter your username"
          />
        </label>
        <label>
          email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
          />
        </label>
        <button onClick={handleSubmit}>Log In</button>
      </form>
      <p>New to Scrounger?</p>
      <Link to="/register">Register</Link>
    </>
  );
}
