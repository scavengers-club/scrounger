import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Profile from './Profile';

test('<Profile/> should render the users profile', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/profile']}>
      <Route path="/profile">
        <Profile currentUser={{ id: '575e91dd-2c9c-4297-aa60-6504a62236dc', username: 'violet' }} />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Here are your adventures, violet');
  expect(container).toMatchSnapshot();
});
