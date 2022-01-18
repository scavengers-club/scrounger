import React from 'react';
import { Link } from 'react-router-dom';

//this will be the form a returning user sees
//will ask for username and password

export default function LogInForm() {
  return (
    <>
      <form>
        <label>
          username:
          <input type="text" />
        </label>
        <label>
          password:
          <input type="password" />
        </label>
        <button>Log In</button>
      </form>
      <p>New to Scrounger?</p>
      <Link to="/register">Register</Link>
    </>
  );
}
