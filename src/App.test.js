import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app description', async () => {
  render(<App />);
  const linkElement = await screen.findByText(
    `Welcome explorer! We're here to guide you on real-world adventures. Scrounger encourages you to explore, discover the world, and cultivate community by creating shared experiences.`
  );
  expect(linkElement).toBeInTheDocument();
});
