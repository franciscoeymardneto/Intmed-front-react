
import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import Icon from '../Icon';
import { Container } from './styles';

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Container>
            {theme === 'light' ? (
                <Icon $iconName='dark_mode' onClick={toggleTheme} $size={'32px'} />
            ) : (
                <Icon $iconName='light_mode' onClick={toggleTheme} $size={'32px'} />
            )}
        </Container>

    );
};

export default ThemeSwitcher;
