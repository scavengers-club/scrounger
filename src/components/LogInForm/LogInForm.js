import React from 'react';

//this will be the form a returning user sees
//will ask for username and password

export default function LogInForm() {
  return (
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
  );
}
