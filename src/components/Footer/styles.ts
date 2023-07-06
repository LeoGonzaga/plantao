import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0px;

  background-color: ${({ theme }) => theme.BACKGROUND};
  width: 100%;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  font-family: Inter;
  color: #b0b0b0;

  a {
    color: white;
    font-weight: bold;
  }
`;
