import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from '../Input';
import { describe, it, expect } from 'vitest';

describe('Input', () => {
  it('should render the input with a label', () => {
    render(<Input label="Test Label" name='test-input'/>);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('should render the input with the placeholder text when no value is provided', () => {
    render(<Input label="Test Label"  />);
    const input = screen.getByPlaceholderText('');
    expect(input).toBeInTheDocument();
  });

  it('should move the label when the input is focused', () => {
    render(<Input label="Test Label" name='test-input'/>);
    const input = screen.getByLabelText('Test Label');
    input.focus()
    const label = screen.getByText('Test Label');
    expect(label).toHaveStyle('top: -8px');
    expect(label).toHaveStyle('font-size: 12px');
  });

  it('should display the error message when errorMessage prop is provided', () => {
    render(<Input label="Test Label" errorMessage="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('should not display the error message when errorMessage prop is not provided', () => {
    render(<Input label="Test Label" />);
    expect(screen.queryByText('Error occurred')).toBeNull();
  });

  it('should apply custom styles and attributes from props', () => {
    render(<Input label="Test Label" className="custom-class" data-testid="custom-input" />);
    const input = screen.getByTestId('custom-input');
    expect(input).toHaveClass('custom-class');
  });
});
