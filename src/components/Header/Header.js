import { NavLink, useHistory } from 'react-router-dom';
import { logOut } from '../../services/users';

import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const history = useHistory();

  const logOutUser = async () => {
    if (confirm('are you sure you want to logout?')) {
      await logOut();
      setCurrentUser(null);
      history.push('/');
    }
  };

  return (
    <header>
      <NavLink exact to="/" className="nav-link">
        <img
          className="nav-icon"
          src={`${process.env.PUBLIC_URL}/nav_icons/home-icon.png`}
          alt="Home page"
        />
      </NavLink>

      {currentUser && (
        <>
          <NavLink className="nav-link" to="/profile">
            <img
              className="nav-icon profile"
              src={`${process.env.PUBLIC_URL}/avatars/${currentUser.avatar}`}
              alt="Your profile"
            />
          </NavLink>
          <img
            className="nav-icon"
            src={`${process.env.PUBLIC_URL}/nav_icons/boot.png`}
            alt="Log out"
            onClick={logOutUser}
            style={{ cursor: 'pointer' }}
          />
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
