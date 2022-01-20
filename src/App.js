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
import Header from './components/Header/Header';
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
            <Home {...{ currentUser }} />
          </Route>
          <Route exact path="/register">
            <Register setCurrentUser={setCurrentUser} avatars={avatars} />
          </Route>
          <Route exact path="/login">
            <LogIn setCurrentUser={setCurrentUser} />
          </Route>

          <ProtectedRoute exact path="/profile" {...{ currentUser }}>
            <Profile {...{ currentUser }} />
          </ProtectedRoute>

          <ProtectedRoute exact path="/adventure/create" {...{ currentUser }}>
            <Create {...{ currentUser }} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/adventure/:id/edit" {...{ currentUser }}>
            <Edit {...{ currentUser }} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/adventure/:id" {...{ currentUser }}>
            <Adventure {...{ currentUser }} />
          </ProtectedRoute>

          <Route exact path="/scoutshonor">
            <ScoutsHonor />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
