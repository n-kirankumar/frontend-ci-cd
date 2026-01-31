import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello DevOps text', () => {
  render(<App />);
  const heading = screen.getByText(/Hello DevOps/i);
  expect(heading).toBeInTheDocument();
});

