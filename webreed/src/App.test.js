import { render, screen } from '@testing-library/react';
import App from './App';

test('tags index', () => {
  render(<App />);
  const linkElement = screen.getByText(/engineer/i);
  const managerElement = screen.getByText(/manager/i);
  expect(linkElement).toBeInTheDocument();
  expect(managerElement).toBeInTheDocument();
});
