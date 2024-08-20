import styled from "styled-components";

export const Container = styled.div`
    & button {
        max-width: 150px;
        max-height: 24px;
        padding: 16px 8px;
        display: flex;
        align-items: center;
        justify-content: center;

        & div {
            margin: 0
        }

        & span {
            margin-right: 0.8rem;
        }
    }
`