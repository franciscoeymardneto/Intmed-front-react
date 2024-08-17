import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Checkbox from '../CheckBox';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  it('should render the checkbox with the correct label', () => {
    render(<Checkbox label="Accept Terms" />);
    const labelElement = screen.getByText('Accept Terms');
    expect(labelElement).toBeInTheDocument();
  });

  it('should render the checkbox in unchecked state by default', () => {
    render(<Checkbox label="Accept Terms" />);
    const checkbox = screen.getByRole('checkbox', {hidden: true});
    expect(checkbox).not.toBeChecked();
  });

  it('should render the checkbox in checked state if checked prop is true', () => {
    render(<Checkbox label="Accept Terms" checked={true} />);
    const checkbox = screen.getByRole('checkbox', {hidden: true});
    expect(checkbox).toBeChecked();
  });

  it('should toggle the checkbox state when clicked', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept Terms" />);
    const checkbox = screen.getByRole('checkbox', {hidden: true});

    // Initially unchecked
    expect(checkbox).not.toBeChecked();

    // Click to check
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    // Click again to uncheck
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should display the correct icon when checked', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept Terms" />);
    const checkbox = screen.getByRole('checkbox', {hidden: true});

    // Initially, icon should not be visible
    expect(screen.queryByText('check')).not.toBeInTheDocument();

    // Click to check
    await user.click(checkbox);

    // Icon should be visible now
    expect(screen.getByText('check')).toBeInTheDocument();
  });

  it('should call onChange prop when checkbox is clicked', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox label="Accept Terms" onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox', {hidden: true});

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should apply the correct styles when focused', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept Terms" />);
    const checkbox = screen.getByRole('checkbox', {hidden: true});

    await user.tab(); 
    expect(checkbox).toHaveFocus();
  });

  it('should apply the correct styles when hovered', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept Terms" />);
    const checkbox = screen.getByRole('checkbox', {hidden: true});

    await user.hover(checkbox);

    // Depending on your theme setup, you may need to check for specific classes or styles.
    expect(screen.getByRole('checkbox', {hidden: true}).nextSibling).toHaveStyle('background: #f0f0f0');
  });

  it('should keep the checkbox checked when using the keyboard', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept Terms" />);
    const checkbox = screen.getByRole('checkbox', {hidden: true});

    await user.tab(); // Focus the checkbox
    expect(checkbox).toHaveFocus();

    await user.keyboard('[Space]'); // Toggle checkbox with keyboard
    expect(checkbox).toBeChecked();

    await user.keyboard('[Space]'); // Toggle again
    expect(checkbox).not.toBeChecked();
  });
});
