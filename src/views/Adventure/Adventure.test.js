import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Adventure from './Adventure';

test('<Adventure/> should render the list of adventures', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/adventure/1']}>
      <Route path="/adventure/:id">
        <Adventure
          currentUser={{ id: '575e91dd-2c9c-4297-aa60-6504a62236dc', username: 'violet' }}
        />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('this adventure is for people, but also animals');
  expect(container).toMatchSnapshot();
});
