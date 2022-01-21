import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';

test('<RegisterForm/> should display an empty form for new user', () => {
  const avatars = [`westerner-hat.png`, `safety-hat.png`, `chullo-hat.png`, `house-hat.png`];
  const { container } = render(
    <MemoryRouter initialEntries={['/register']}>
      <Route path="/register">
        <RegisterForm avatars={avatars} />
      </Route>
    </MemoryRouter>
  );

  screen.getAllByDisplayValue('');
  expect(container).toMatchSnapshot();
});
