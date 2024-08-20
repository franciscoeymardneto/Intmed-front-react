import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 80%;
  max-width: 20rem;
  height: 11rem;
  border-radius: 12px;
  padding: 1rem;
  line-height: 1.5;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 1px 4px 0px ${({ theme }) => theme.colors.table_shadow};
`