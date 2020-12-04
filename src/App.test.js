import { render, screen } from '@testing-library/react';
import App from './App';

// first test
test('has Hooks Demo text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hooks Demo!/i);
  expect(textElement).toBeInTheDocument();
});

test('app is rendering', ()=>{
  expect(App).toBeTruthy();
});