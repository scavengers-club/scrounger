import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../services/users';
import home from '../../navIcons/home.png';
import profile from '../../navIcons/profile.png';
import logout from '../../navIcons/logout.png';

export default function Header({ currentUser, setCurrentUser }) {
  const logOutUser = async () => {
    await logOut();
    setCurrentUser(null);
  };

  return (
    <header>
      <NavLink exact to="/">
        <img src={home}></img>
      </NavLink>
      {currentUser && (
        <>
          <NavLink to="/user/:id">
            <img src={profile}></img>
          </NavLink>
          <img src={logout} onClick={logOutUser}></img>
        </>
      )}
      {!currentUser && (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </>
      )}
    </header>
  );
}
