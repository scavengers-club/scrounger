import React from 'react';
import { Link } from 'react-router-dom';

//this will be the form that a new user sees
//will ask for email, username, password (twice for verification?)
//*strong possibility of avatar option*
//on button click here, will call scout honor and require second button click to complete registration

export default function RegisterForm() {
  return (
    <>
      <form>
        <label>
          username:
          <input type="text" />
        </label>
        <label>
          email:
          <input type="email;" />
        </label>
        <label>
          password:
          <input type="password" />
        </label>
        <label>
          re-enter password:
          <input type="password" />
        </label>
        <label>
          <input type="checkbox" />I am over the age of 13
        </label>
        <button>Register</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Log In</Link>
    </>
  );
}
