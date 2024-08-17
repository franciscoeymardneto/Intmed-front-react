import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Label from '../Label';
import { describe, it, expect } from 'vitest';

describe('Label', () => {
  it('should render the label with the correct text', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should have the correct styles applied', () => {
    const { container } = render(<Label>Test Label</Label>);
    const label = container.firstChild as HTMLElement;

    expect(label).toHaveStyle('color: var(--border-color)');
    expect(label).toHaveStyle('font-size: 16px');
    expect(label).toHaveStyle('font-weight: normal');
    expect(label).toHaveStyle('position: absolute');
    expect(label).toHaveStyle('pointer-events: none');
    expect(label).toHaveStyle('left: 8px');
    expect(label).toHaveStyle('top: 15px');
    expect(label).toHaveStyle('transition: 0.2s ease all');
  });

  it('should be positioned correctly', () => {
    const { container } = render(<Label>Test Label</Label>);
    const label = container.firstChild as HTMLElement;

    const computedStyle = window.getComputedStyle(label);
    expect(computedStyle.left).toBe('8px');
    expect(computedStyle.top).toBe('15px');
  });
});
