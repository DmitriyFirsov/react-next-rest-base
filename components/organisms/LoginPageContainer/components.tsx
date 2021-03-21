import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-left: auto;
  margin-right: auto;

  > * {
    margin-bottom: 2rem;
  }

  > *:last-child {
    margin-bottom: unset;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 5rem;
`;
