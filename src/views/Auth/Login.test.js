import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import LogIn from './LogIn';

test('log in should render a header a register link', () => {
  const { container } = render(
    <MemoryRouter>
      <LogIn currentUser={null} />{' '}
    </MemoryRouter>
  );
  screen.getByText('Log In');
  screen.getByText('New to Scrounger?');
  screen.getByText('Register');

  expect(container).toMatchSnapshot();
});
