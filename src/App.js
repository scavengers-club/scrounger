import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Register from './views/Auth/Register';
import LogIn from './views/Auth/LogIn';
import Profile from './views/Profile/Profile';
import Adventure from './views/Adventure/Adventure';
import Create from './views/Create/Create';
import Edit from './views/Edit/Edit';
import { getUser } from './services/users';
import { useState, useEffect } from 'react';
import ScoutsHonor from './components/ScoutsHonor/ScoutsHonor';
import ProtectedRoute from './utils/ProtectedRoute';
import Header from './views/Header/Header';
``;

function App() {
  const avatars = [`christmas-hat.png`, `feather-hat.png`, `fedora-hat.png`, `winter-hat.png`];

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setCurrentUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header {...{ currentUser, setCurrentUser }} />
        <Switch>
          <Route exact path="/">
            {currentUser && <Home {...{ currentUser }} />}
            {!currentUser && <div>banana</div>}
          </Route>
          <Route exact path="/register">
            <Register setCurrentUser={setCurrentUser} avatars={avatars} />
          </Route>
          <Route exact path="/login">
            <LogIn setCurrentUser={setCurrentUser} />
          </Route>

          <ProtectedRoute exact path="/user/:id" {...{ currentUser }}>
            <Profile {...{ currentUser }} />
          </ProtectedRoute>

          <ProtectedRoute exact path="/adventure/:id" {...{ currentUser }}>
            <Adventure {...{ currentUser }} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/adventure/create" {...{ currentUser }}>
            <Create {...{ currentUser }} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/adventure/:id/edit" {...{ currentUser }}>
            <Edit {...{ currentUser }} />
          </ProtectedRoute>

          <Route exact path="/scoutshonor">
            <ScoutsHonor />
          </Route>
        </Switch>

        {/* This is a temporary footer for attribution to 
        FlatIcon; we should consider where else these could go */}
        <footer
          style={{
            backgroundColor: 'white',
            position: 'fixed',
            bottom: '0',
            right: '0',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '0.9rem',
          }}
        >
          Icons courtesy of:
          <a href="https://www.flaticon.com/free-icons/christmas-hat" title="christmas hat icons">
            Christmas hat icons created by Umeicon - Flaticon
          </a>
          <a href="https://www.flaticon.com/free-icons/german" title="german icons">
            German icons created by Dreamcreateicons - Flaticon
          </a>
          <a href="https://www.flaticon.com/free-icons/christmas-hat" title="christmas hat icons">
            Christmas hat icons created by imaginationlol - Flaticon
          </a>
          <a href="https://www.flaticon.com/free-icons/fedora" title="fedora icons">
            Fedora icons created by Talha Dogar - Flaticon
          </a>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
