import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import AdventureDetail from './AdventureDetail';
import { getAdventureById } from '../../services/adventures';

test('<AdventureDetail/> should render adventure details', () => {
  const adventure = {
    id: 1,
    name: 'unique adventure',
    description: 'this is a description',
    image:
      'https://media.istockphoto.com/photos/sunset-in-downtown-portland-oregon-picture-id1283364803?b=1&k=20&m=1283364803&s=170667a&w=0&h=CEcB5sIBGs1GX3LhyLxgU53K7rgeP4vNsC4tWhesOAo=',
    hint_1: 'go here',
    hint_2: 'go there',
    hint_3: 'go everywhere',
    solution: 'you are beautiful',
  };
  const { container } = render(
    <MemoryRouter initialEntries={['/adventure/1']}>
      <Route path="/adventure/:id">
        <AdventureDetail
          currentUser={{ id: '575e91dd-2c9c-4297-aa60-6504a62236dc', username: 'violet' }}
          {...adventure}
        />
      </Route>
    </MemoryRouter>
  );

  screen.getByText('Solution: you are beautiful');
  expect(container).toMatchSnapshot();
});
