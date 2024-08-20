import styled from "styled-components";

export const Container = styled.div`
    & button {
      max-width: 200px;
      max-height: 24px;
      padding: 16px 16px 16px 8px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;

      & div {
        margin: 0
      }

      & span {
        margin-right: 0.6rem
      }
    }
`