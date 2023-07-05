import styled from 'styled-components';

export const Container = styled.div<{
  isOpen: boolean;
}>`
  color: ${({ isOpen }) => (isOpen ? '#3a7f0d' : '#d2d2d2')};
  font-size: 12px;
  font-family: Inter;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    gap: 4px;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0px 10px;
    outline: none;
    cursor: pointer;
  }
`;

export const Online = styled.div<{
  isOpen: boolean;
}>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ isOpen }) => (isOpen ? '#3a7f0d' : '#d2d2d2')};
`;
