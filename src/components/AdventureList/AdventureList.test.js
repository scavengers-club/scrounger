import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import AdventureList from './AdventureList';

test('<AdventureList/> should render the list of adventures', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/">
        <AdventureList
          adventures={[
            {
              id: 1,
              name: 'unique adventure',
              description: 'this is a description',
              image:
                'https://media.istockphoto.com/photos/sunset-in-downtown-portland-oregon-picture-id1283364803?b=1&k=20&m=1283364803&s=170667a&w=0&h=CEcB5sIBGs1GX3LhyLxgU53K7rgeP4vNsC4tWhesOAo=',
              hint_1: 'go here',
              hint_2: 'go there',
              hint_3: 'go everywhere',
              solution: 'you are beautiful',
            },
          ]}
        />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('unique adventure');
  expect(container).toMatchSnapshot();
});
