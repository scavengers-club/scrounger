import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import AdventureForm from './AdventureForm';

test('<AdventureForm/> should render the form for an adventure', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/adventure/create']}>
      <Route path="/adventure/create">
        <AdventureForm />
      </Route>
    </MemoryRouter>
  );

  screen.getAllByDisplayValue('');
  expect(container).toMatchSnapshot();
});
