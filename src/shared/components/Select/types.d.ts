import React from "react";
import { UseFormRegisterReturn, TFieldValues, Control } from "react-hook-form";
import { ThemeConfig } from "react-select"
import { DefaultTheme } from "styled-components"

export type OptionType = {
    key: string;
    label: string;
    value: string;
}
export type SelectProps = {
    options: OptionType[]
    $hasError: boolean
    label: string,
    errorMessage?: string
    label?: string
    name?: string
    isLoading?: boolean
    placeholder?: string
    control: Control<any, any>
} & UseFormRegisterReturn<TFieldValues>