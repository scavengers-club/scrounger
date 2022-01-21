import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Home from './Home';

test('<Home/> should welcome current user', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/">
        <Home currentUser={{ id: '575e91dd-2c9c-4297-aa60-6504a62236dc', username: 'violet' }} />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Welcome back, violet!');
  expect(container).toMatchSnapshot();
});
