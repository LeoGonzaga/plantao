import styled from 'styled-components';

export const Container = styled.div`
  color: #3a7f0d;
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
  }
`;

export const Online = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #3a7f0d;
`;
