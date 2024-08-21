import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';
import { describe, it, expect } from 'vitest';

describe('Logo', () => {
  it('should render the logo image', () => {
    render(<Logo size='big'/>);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('should have the correct src attribute', () => {
    render(<Logo size='big'/>);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'Logo.png');
  });

  it('should have the correct alt attribute', () => {
    render(<Logo size='big'/>);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'medicar-logo');
  });
});
