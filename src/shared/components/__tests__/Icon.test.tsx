import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Icon from '../Icon';
import { describe, it, expect } from 'vitest';

describe('Icon', () => {
  it('should render the icon with the correct name', () => {
    render(<Icon $iconName="check" />);
    const iconElement = screen.getByText('check');
    expect(iconElement).toBeInTheDocument();
  });

  it('should apply the correct size based on the $size prop', () => {
    render(<Icon $iconName="check" $size="30px" />);
    const iconElement = screen.getByText('check');
    expect(iconElement).toHaveStyle('font-size: 30px');
  });

  it('should default to the Material Icons font-family', () => {
    render(<Icon $iconName="check" />);
    const iconElement = screen.getByText('check');
    expect(iconElement).toHaveStyle("font-family: 'Material Icons'");
  });

  it('should inherit color when $color prop is not provided', () => {
    render(<Icon $iconName="check" />);
    const iconElement = screen.getByText('check');
    expect(iconElement).toHaveStyle('color: inherit');
  });

  it('should apply custom className when provided', () => {
    render(<Icon $iconName="check" className="custom-class" />);
    const iconElement = screen.getByText('check');
    expect(iconElement).toHaveClass('custom-class');
  });
});
