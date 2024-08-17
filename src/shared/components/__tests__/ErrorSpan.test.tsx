import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorSpan from '../ErrorSpan';
import { describe, it, expect } from 'vitest';

describe('ErrorSpan', () => {
  it('should render the ErrorSpan with the correct text', () => {
    render(<ErrorSpan>Error message</ErrorSpan>);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('should have the correct styles applied', () => {
    const { container } = render(<ErrorSpan>Error message</ErrorSpan>);
    const errorSpan = container.firstChild as HTMLElement;

    expect(errorSpan).toHaveStyle('color: var(--error)');
    expect(errorSpan).toHaveStyle('font-size: 12px');
    expect(errorSpan).toHaveStyle('position: absolute');
    expect(errorSpan).toHaveStyle('bottom: -20px');
    expect(errorSpan).toHaveStyle('left: 5px');
  });

  it('should be positioned correctly', () => {
    const { container } = render(<ErrorSpan>Error message</ErrorSpan>);
    const errorSpan = container.firstChild as HTMLElement;

    // Check if the ErrorSpan has the correct position
    const computedStyle = window.getComputedStyle(errorSpan);
    expect(computedStyle.bottom).toBe('-20px');
    expect(computedStyle.left).toBe('5px');
  });
});
