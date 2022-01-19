import { Link } from 'react-router-dom';

export default function LogInForm({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <>
      <form>
        <label>
          email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
          />
        </label>
        <button onClick={handleSubmit}>Log In</button>
      </form>
      <p>New to Scrounger?</p>
      <Link to="/register">Register</Link>
    </>
  );
}
