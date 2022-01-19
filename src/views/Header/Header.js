import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../services/users';

export default function Header({ currentUser, setCurrentUser }) {
  const logOutUser = async () => {
    await logOut();
    setCurrentUser(null);
  };
  return (
    <header>
      {currentUser && (
        <>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/user/:id">Profile</NavLink>
          <button onClick={logOutUser}>Log Out</button>
        </>
      )}
      {!currentUser && (
        <>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </>
      )}
    </header>
  );
}
