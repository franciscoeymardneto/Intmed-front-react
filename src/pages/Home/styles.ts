import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 16rem;
  max-width: 50rem;
  width: 100%;
  text-align: left;
`;

export const ConsultsListContainer = styled.div`
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    box-shadow: 0px 1px 4px 0px ${({ theme }) => theme.colors.table_shadow};
    
   
`
export const ConsultsListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
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
    }
    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.text};
      margin: 0;
    }
`


