import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ScoutsHonor from './ScoutsHonor';

test('<ScoutsHonor/> should render the Pledge', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/scoutshonor']}>
      <Route path="/scoutshonor">
        <ScoutsHonor />
      </Route>
    </MemoryRouter>
  );

  screen.getByText(
    `Please be respectful of others and property. Leave things as you find them. Be responsible if using this app after dark. Carry a mask so as to keep yourself and others safe. If you are adventuring alone, make sure someone knows where you are. Be sure to keep your phone charged.`
  );
  expect(container).toMatchSnapshot();
});
