import React from "react";
import { useTheme } from "../../../contexts/ThemeContext";

const Logo: React.FC = (): JSX.Element => {
    const theme = useTheme()

    const imgSrc = theme.theme === 'dark' ? 'logo_dark.png' : 'logo_light.png'
    return (
        <img src={imgSrc} alt="medicar-logo" />
    )
}

export default Logo