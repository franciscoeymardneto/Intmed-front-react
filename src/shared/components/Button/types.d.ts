
export type StyledButtonProps = {
    $variant?: 'flat' | 'basic';
}

export type ButtonProps = {
} & React.ButtonHTMLAttributes<HTMLButtonElement> & StyledButtonProps