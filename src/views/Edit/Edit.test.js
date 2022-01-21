import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import Edit from './Edit';

test('Edit should render prefilled form ', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/adventure/1/edit']}>
      <Route path="/adventure/:id/edit">
        <Edit
          currentUser={{ id: 'cdac1946-18d3-46a7-b531-9a2fb66ade51' }}
          match={{ params: { id: 1 } }}
        />{' '}
      </Route>
    </MemoryRouter>
  );
  await screen.findByDisplayValue('mount hood');

  expect(container).toMatchSnapshot();
});
