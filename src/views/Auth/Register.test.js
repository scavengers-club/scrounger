import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Register from './Register';

test('Register will render a header and a link to log in', () => {
  const avatars = [`westerner-hat.png`, `safety-hat.png`, `chullo-hat.png`, `house-hat.png`];
  const { container } = render(
    <MemoryRouter>
      <Register avatars={avatars} />
    </MemoryRouter>
  );
  screen.getByText('Register');
  screen.getByText('Already have an account?');
  screen.getByText('Log In');

  expect(container).toMatchSnapshot();
});
