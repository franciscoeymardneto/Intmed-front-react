import React from 'react';
import SelectComp from 'react-select';
import { useTheme } from 'styled-components';
import { OptionType, SelectProps } from './types';
import ErrorSpan from '../ErrorSpan';
import { SelectStyles, SelectWrapper } from './styles';
import Label from '../Label';
import { Controller } from 'react-hook-form';

const Select = React.forwardRef<HTMLDivElement, SelectProps>(({
    $hasError,
    options,
    errorMessage,
    label,
    name,
    placeholder,
    control,
    disabled,
    isLoading,

}, ref) => (
        <SelectWrapper ref={ref}>
            <Label id={name}>{label}</Label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <SelectComp
                        {...field}
                        options={options}
                        isClearable
                        value={field.value ? options.find(op => op.key == field.value) : null}
                        isDisabled={disabled}
                        placeholder={placeholder}
                        isLoading={isLoading}
                        onChange={(event) => {
                            field.onChange((event as OptionType)?.value || undefined)
                        }}

                        styles={SelectStyles($hasError, useTheme())}
                    />

                )}
            />

            <ErrorSpan hidden={!errorMessage}>{errorMessage}</ErrorSpan>
        </SelectWrapper>
    )
)
export default Select