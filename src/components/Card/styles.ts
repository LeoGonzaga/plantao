import styled, { css } from 'styled-components';

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0.2;
      cursor: not-allowed;
    `}
`;
