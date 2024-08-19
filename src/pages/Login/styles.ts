import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 400px;

  & img {
    width: 180px;
    margin-bottom: 1rem;
  }
`;

export const LoginFormTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginFormActions = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  button {
    width: 180px;
  }
`;
