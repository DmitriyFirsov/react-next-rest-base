import styled, { css } from 'styled-components';

export const TabComponent = styled.div<{ isActive: boolean }>(
  ({ theme: { colors }, isActive }) => css`
    ${isActive && `border-bottom: 1px solid ${colors.link}`};
    cursor: pointer;
    display: inline-block;
  `,
);

export const TabContainer = styled.div<{ direction?: 'row' | 'column' }>(
  ({ direction = 'row' }) => css`
    display: flex;
    flex-direction: ${direction};
    width: 100%;
    justify-content: space-around;
    > * {
      padding: 0.6rem;
    }
  `,
);
