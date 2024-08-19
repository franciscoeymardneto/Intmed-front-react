import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button/Button';
import { describe, it, expect, vi } from 'vitest';

describe('Button', () => {
    it('should render the button with the correct text', () => {
        render(<Button>Click Me</Button>);
        const button = screen.getByRole('button', { name: 'Click Me' });
        expect(button).toBeInTheDocument();
    });

    it('should apply the correct styles', () => {
        render(<Button>Click Me</Button>);
        const button = screen.getByRole('button');

        expect(button).toHaveStyle('background-color: ButtonFace');
        expect(button).toHaveStyle('color: rgb(255, 255, 255)');
        expect(button).toHaveStyle('padding: 10px 8px');
        expect(button).toHaveStyle('font-size: 16px');
        expect(button).toHaveStyle('border-radius: 8px');
        expect(button).toHaveStyle('cursor: pointer');
    });

    it('should apply active styles correctly', async () => {
        const user = userEvent.setup();
        render(<Button>Click Me</Button>);
        const button = screen.getByRole('button');

        await user.click(button);
        expect(button).toHaveStyle('opacity: 0.5');
    });

    it('should apply disabled styles and not be clickable', () => {
        const handleClick = vi.fn();
        render(
            <Button onClick={handleClick} disabled>
                Click Me
            </Button>
        );
        const button = screen.getByRole('button', { name: 'Click Me' });

        // Verify disabled styles
        expect(button).toHaveStyle('background-color: rgba(0, 0, 0, 0.12)');
        expect(button).toHaveStyle('color: rgba(0, 0, 0, 0.26)');
        expect(button).toHaveStyle('cursor: not-allowed');

        // Verify button is not clickable
        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should be clickable when enabled', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const button = screen.getByRole('button', { name: 'Click Me' });

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
