import { FC, InputHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  opacity: 0;
  width: 1px;
`;

type StyledCheckboxProps = {
    $checked?: boolean
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${(props) => (props.$checked ? 'var(--primary-color)' : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid var(--border-color);
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 5px var(--primary-color-blush)
  }

  ${HiddenCheckbox}:hover + & {
    background: ${(props) => (props.$checked ? '#000000' : '#f0f0f0')};
  }

  ${HiddenCheckbox}:checked + & {
    background: var(--primary-color);
    border-color: var(--primary-color);
  }

`;

const CheckboxContainer = styled.div`
  display: flex;
  vertical-align: middle;
  margin-right: 10px;
  position: relative;
`;

const CheckboxIconContainer = styled.div`
  position: absolute;
  left: 1px;
  top: 1px;
  color: white;
  
`;

const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    color: var(--label-text-color);
`


type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

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
