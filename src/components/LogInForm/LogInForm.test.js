import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import LogInForm from './LogInForm';

test('<LogInForm/> should display an empty form for returning user', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/login']}>
      <Route path="/login">
        <LogInForm />
      </Route>
    </MemoryRouter>
  );

  screen.getAllByDisplayValue('');
  expect(container).toMatchSnapshot();
});
