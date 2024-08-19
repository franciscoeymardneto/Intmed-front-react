import { FC, useState } from 'react';
import Icon from '../Icon';
import { CheckboxProps } from './types';
import { CheckboxContainer, CheckboxIconContainer, CheckBoxLabel, HiddenCheckbox, StyledCheckbox } from './styles';


const Checkbox: FC<CheckboxProps> = ({ className, checked: checkedProp, label, onChange, ...props }) => {
    const [checked, setChecked] = useState(checkedProp || false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <CheckBoxLabel>
            <CheckboxContainer className={className}>
                <HiddenCheckbox 
                    checked={checked} 
                    onChange={handleCheckboxChange} 
                    {...props} 
                />
                <StyledCheckbox $checked={checked} />
                {checked && (
                    <CheckboxIconContainer>
                        <Icon
                            $iconName='check'
                            $size="16px"
                        />
                    </CheckboxIconContainer>
                )}
            </CheckboxContainer>
            {label}
        </CheckBoxLabel>
    );
};

export default Checkbox;
