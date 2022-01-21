import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Header from './Header';

test('<Header/> should display register and log in options', () => {
  const { container } = render(
    <MemoryRouter>
      <Route>
        <Header />
      </Route>
    </MemoryRouter>
  );

  screen.getByText('Register');
  expect(container).toMatchSnapshot();
});
