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

    expect(label).toHaveStyle('color: var(--label-text-color)');
    expect(label).toHaveStyle('font-size: 12px');
    expect(label).toHaveStyle('font-weight: normal');
  });
});
