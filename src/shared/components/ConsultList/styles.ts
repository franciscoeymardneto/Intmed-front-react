import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    padding: 0 16px;
    & th {
        color: ${({theme}) => theme.colors.label_text};
        font-size: 0.87rem;
        font-weight: 700;
    }

    & td {
        color: ${({theme}) => theme.colors.text};
        font-size: 0.9rem;
    }

    & tr:nth-child(even) {
        background-color: #F8F8F8;
    }
`