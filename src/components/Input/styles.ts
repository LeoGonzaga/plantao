import styled from "styled-components";

export const Container = styled.input`
  height: 51px;
  width: 327px;
  border-radius: 8px;

  outline: none;
  border: none;
  box-shadow: 0px 4px 14px 0px rgba(32, 32, 32, 0.25);

  position: absolute;
  bottom: -25px;

  padding: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.PLACEHOLDER};
`;
