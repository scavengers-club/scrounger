import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import Edit from './Edit';

test('Edit should render prefilled form ', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/adventure/25/edit']}>
      <Route path="/adventure/:id/edit">
        <Edit
          currentUser={{ id: 'ab0abbd1-29ad-414e-a8f2-343377f6b2bc' }}
          match={{ params: { id: 25 } }}
        />{' '}
      </Route>
    </MemoryRouter>
  );
  await screen.findByDisplayValue('a place');

  expect(container).toMatchSnapshot();
});
