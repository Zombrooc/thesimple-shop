import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: var(--color-light);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-dark);
`;

export const CenterBox = styled.div`
  width: 650px;
  height: auto;
  padding: 20px;

  p {
    font-size: 1.3rem;
    text-align: center;
  }
`;
