import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
  padding-top: 200px;

  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  height: 95vh;
  overflow-y: scroll;

  @media (min-width: 660px) {
    height: initial;

    &:last-child {
      div {
        background-color: red !important;
      }
    }
  }
`;

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 110px;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  margin-bottom: 5px;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  height: 110px;
  border-radius: 8px;

  &::before {
    content: '\00a0';
  }
`;
