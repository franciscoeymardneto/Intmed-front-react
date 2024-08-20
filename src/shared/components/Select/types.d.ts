import React from "react";
import { UseFormRegisterReturn, TFieldValues, Control } from "react-hook-form";
import { ThemeConfig } from "react-select"
import { DefaultTheme } from "styled-components"

export type SelectProps = {
    options: {
        key: string;
        label: string;
        value: string;
    }[]
    $hasError: boolean
    label: string,
    errorMessage?: string
    label?: string
    name?: string
    placeholder?: string
    control: Control<any, any>
} & UseFormRegisterReturn<TFieldValues>