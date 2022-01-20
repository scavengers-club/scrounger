import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({ currentUser, path, children, ...rest }) {
  return (
    <Route
      exact
      path={path}
      {...rest}
      render={() => (currentUser ? { ...children } : <Redirect to="/login" />)}
    />
  );
}
