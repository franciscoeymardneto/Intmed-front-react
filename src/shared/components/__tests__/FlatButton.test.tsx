import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FlatButton from '../FlatButton';
import { describe, it, expect, vi } from 'vitest';

describe('FlatButton', () => {
    it('should render the button with the correct text', () => {
        render(<FlatButton>Click Me</FlatButton>);
        const button = screen.getByRole('button', { name: 'Click Me' });
        expect(button).toBeInTheDocument();
    });

    it('should apply the correct styles', () => {
        render(<FlatButton>Click Me</FlatButton>);
        const button = screen.getByRole('button');

        expect(button).toHaveStyle('background-color: rgb(255, 255, 255)');
        expect(button).toHaveStyle('color: ButtonText');
        expect(button).toHaveStyle('padding: 16px 8px');
        expect(button).toHaveStyle('font-size: 16px');
        expect(button).toHaveStyle('border-radius: 8px');
        expect(button).toHaveStyle('cursor: pointer');
    });

    it('should apply active styles correctly', async () => {
        const user = userEvent.setup();
        render(<FlatButton>Click Me</FlatButton>);
        const button = screen.getByRole('button');

        await user.click(button);
        expect(button).toHaveStyle('opacity: 0.5');
    });

    it('should apply disabled styles and not be clickable', () => {
        const handleClick = vi.fn();
        render(
            <FlatButton onClick={handleClick} disabled>
                Click Me
            </FlatButton>
        );
        const button = screen.getByRole('button', { name: 'Click Me' });

        // Verify disabled styles
        expect(button).toHaveStyle('background-color: rgb(255, 255, 255)');
        expect(button).toHaveStyle('color: rgba(0, 0, 0, 0.26)');
        expect(button).toHaveStyle('cursor: not-allowed');

        // Verify button is not clickable
        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
        const handleClick = vi.fn();
        render(<FlatButton onClick={handleClick}>Click Me</FlatButton>);
        const button = screen.getByRole('button', { name: 'Click Me' });

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
