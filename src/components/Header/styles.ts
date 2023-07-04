import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
  height: 144px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;
