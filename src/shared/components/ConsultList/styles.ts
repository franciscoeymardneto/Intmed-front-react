import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    padding: 0 16px 16px;
    border-spacing: 0;
    & th {
        color: ${({theme}) => theme.colors.label_text};
        font-size: 0.87rem;
        font-weight: 700;
    }

    & td {
        color: ${({theme}) => theme.colors.text};
        font-size: 0.9rem;
    } 

    & th, td {
        padding: 0 8px;
    }

    & tr:nth-child(even) {
        background-color: ${({theme}) => theme.colors.table_stripe};

        & button {
            background-color: ${({theme}) => theme.colors.table_stripe};
        }
    }
`