import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUser } from './services/users';

import Adventure from './views/Adventure/Adventure';
import Create from './views/Create/Create';
import Edit from './views/Edit/Edit';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import LogIn from './views/Auth/LogIn';
import Profile from './views/Profile/Profile';
import ProtectedRoute from './utils/ProtectedRoute';
import Register from './views/Auth/Register';
import ScoutsHonor from './views/ScoutsHonor/ScoutsHonor';

import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const avatars = [`westerner-hat.png`, `safety-hat.png`, `chullo-hat.png`, `house-hat.png`];

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setCurrentUser(user);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <h2>getting profile...</h2>;

  return (
    <div className="App">
      <BrowserRouter>
        <Header {...{ currentUser, setCurrentUser }} />
        <Switch>
          <Route exact path="/">
            <Home {...{ currentUser }} />
          </Route>
          <Route exact path="/register">
            <Register {...{ setCurrentUser, avatars }} />
          </Route>
          <Route exact path="/login">
            <LogIn {...{ setCurrentUser }} />
          </Route>

          <ProtectedRoute path="/profile" {...{ currentUser }}>
            <Profile {...{ currentUser }} />
          </ProtectedRoute>
          <ProtectedRoute path="/adventure/create" {...{ currentUser }}>
            <Create {...{ currentUser }} />
          </ProtectedRoute>
          <ProtectedRoute path="/adventure/:id/edit" {...{ currentUser }}>
            <Edit {...{ currentUser }} />
          </ProtectedRoute>
          <ProtectedRoute path="/adventure/:id" {...{ currentUser }}>
            <Adventure {...{ currentUser }} />
          </ProtectedRoute>

          <Route exact path="/scoutshonor">
            <ScoutsHonor />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
