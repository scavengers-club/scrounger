import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Create from './Create';

test('Create should render empty form', () => {
  const { container } = render(
    <MemoryRouter>
      <Create currentUser={{ id: 'ab0abbd1-29ad-414e-a8f2-343377f6b2bc' }} />{' '}
    </MemoryRouter>
  );
  screen.getAllByDisplayValue('');

  expect(container).toMatchSnapshot();
});
