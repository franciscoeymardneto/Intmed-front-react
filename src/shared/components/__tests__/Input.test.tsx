import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from '../Input';
import { describe, it, expect } from 'vitest';

describe('Input', () => {
  it('should render the input with a label', () => {
    render(<Input label="Test Label" name='test-input' />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('should apply the correct styles', () => {
    render(<Input label="Test Label" name='test-input' placeholder='' />);
    const input = screen.getByPlaceholderText('');
    expect(input).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    expect(input).toHaveStyle('padding: 10px 8px');
    expect(input).toHaveStyle('font-size: 16px');
    expect(input).toHaveStyle('border-radius: 5px');
  });

  it('should render the input with the placeholder text', () => {
    render(<Input label="Test Label" placeholder='placeholder'/>);
    const input = screen.getByPlaceholderText('placeholder');
    expect(input).toBeInTheDocument();
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
