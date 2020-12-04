import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hooks Demo/i);
  expect(linkElement).toBeInTheDocument();
});

test('app is available', () => {
  expect(App).toBeTruthy();
});
