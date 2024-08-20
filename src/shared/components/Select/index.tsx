import React from 'react';
import SelectComp from 'react-select';
import { useTheme } from 'styled-components';
import { SelectProps } from './types';
import ErrorSpan from '../ErrorSpan';
import { SelectStyles, SelectWrapper } from './styles';
import Label from '../Label';
import { Controller } from 'react-hook-form';

const Select: React.FC<SelectProps> = ({
    $hasError,
    options,
    errorMessage,
    label,
    name,
    placeholder,
    control
}) => {

    return (
        <SelectWrapper>
            <Label id={name}>{label}</Label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <SelectComp
                        {...field}
                        options={options}
                        isClearable
                        placeholder={placeholder}
                        styles={SelectStyles($hasError, useTheme())}
                    />

                )}
            />

            <ErrorSpan hidden={!errorMessage}>{errorMessage}</ErrorSpan>
        </SelectWrapper>
    )




}

export default Select