import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
`;

export const Description = styled.p`
  font-size: 12px;
  font-family: Inter;
  color: #fff;
  padding: 0px 20px;
`;
