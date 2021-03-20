import styled, { css } from 'styled-components';

export const Header = styled.header(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid ${colors.borderLight};
    align-items: center;
    padding: 1rem;
  `
);