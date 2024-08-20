import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  height: 32px;
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        max-height: 32px;
    }

    & div {
        margin-bottom: 0;
        margin-left: 1rem;
        color: ${({theme}) => theme.colors.label_text};
    }

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
        & button {
            margin: 0;
        }
    }
  }
`;


export const UserNameLabel = styled.span`
    white-space: nowrap;
    margin: 0 30px;
    color: ${({theme}) => theme.colors.label_text};
    font-weight: 400;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
`

export const MobileHiddenContainer = styled.span`
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
`

export const MobileShowContainer = styled.span`
    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
`