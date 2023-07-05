import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  height: 80vh;
  overflow-y: scroll;

  @media (min-width: 660px) {
    height: initial;
  }
`;
