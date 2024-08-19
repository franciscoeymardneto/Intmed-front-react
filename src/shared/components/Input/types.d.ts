export type InputComponentProps = {
    $hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
    label: string,
    errorMessage?: string
} & React.InputHTMLAttributes<HTMLInputElement>