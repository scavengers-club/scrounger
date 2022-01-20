import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../services/users';
import home from '../../navIcons/home.png';
import profile from '../../navIcons/profile.png';
import logout from '../../navIcons/logout.png';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const logOutUser = async () => {
    if (confirm('are you sure you want to logout?') === true) {
      await logOut();
      setCurrentUser(null);
    }
  };

  return (
    <header>
      <NavLink exact to="/">
        <img className="nav-icon" src={home}></img>
      </NavLink>
      {currentUser && (
        <>
          <NavLink to="/profile">
            <img src={profile}></img>
          </NavLink>
          <img src={logout} onClick={logOutUser}></img>
        </>
      )}
      {!currentUser && (
        <>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Log In
          </NavLink>
        </>
      )}
    </header>
  );
}
