import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 80%;
  max-height: 90%;
  overflow-y: auto;
  max-width: 500px;
  min-height: 20rem;
  border-radius: 12px;
  padding: 1rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 1px 4px 0px ${({ theme }) => theme.colors.table_shadow};

  & h2 {
    width: 100%;
    max-width: 400px;
    text-align: left;
  }
`

export const ConsultForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom:4rem;
  position: relative;
  max-width: 400px;

  & #modal-actions-container{
    right: -3px;
  }
`

export const ConsultFormTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({theme}) => theme.colors.label_text};
`;