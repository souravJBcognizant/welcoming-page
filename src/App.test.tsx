import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome component', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Our Platform/i);
  expect(welcomeElement).toBeInTheDocument();
});
