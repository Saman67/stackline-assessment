import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react page', () => {
  render(<App />);
  const element = screen.getByText(/Retail Sales/i);
  expect(element).toBeInTheDocument();
});
