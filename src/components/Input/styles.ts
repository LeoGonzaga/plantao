import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: -25px;
  box-shadow: 0px 4px 14px 0px rgba(32, 32, 32, 0.25);
  background-color: #fff;
  padding: 0px 16px;
  border-radius: 8px;
  width: 90%;
  max-width: 360px;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  height: 51px;
  outline: none;
  border: none;
  padding-left: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.PLACEHOLDER};
`;
