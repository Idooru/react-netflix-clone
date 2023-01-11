import styled from "styled-components";

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.95;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flext-direction: column;
  width: 100%;
  height: 100vh;
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
