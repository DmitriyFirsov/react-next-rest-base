import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  > * {
    margin-bottom: 2rem;
  }

  > *:last-child {
    margin-bottom: unset;
  }
`;
