import React from "react";
import { useTheme } from "../../../contexts/ThemeContext";

type LogoProps = {
    size: 'big' | 'small'
}
const Logo: React.FC<LogoProps> = ({size = 'big'}): JSX.Element => {
    const theme = useTheme()

    const imgSrc = theme.theme === 'dark' ? `logo_${size}_dark.png` : `logo_${size}_light.png`
    return (
        <img src={imgSrc} alt="medicar-logo" />
    )
}

export default Logo