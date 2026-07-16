import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WelcomeBanner from './components/WelcomeBanner';

describe('WelcomeBanner', () => {
  it('renders without crashing', () => {
    render(<WelcomeBanner />);
    expect(document.querySelector('.welcome-banner')).toBeInTheDocument();
  });

  it('displays the welcome text and name', () => {
    render(<WelcomeBanner />);
    expect(screen.getByText(/Please join us in welcoming/i)).toBeInTheDocument();
    expect(screen.getByText(/Babak Hodjat/i)).toBeInTheDocument();
  });

  it('displays the location chip', () => {
    render(<WelcomeBanner />);
    expect(screen.getByText(/COGNIZANT · BENGALURU/i)).toBeInTheDocument();
  });
});
