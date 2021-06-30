import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  div.pushBack {
    padding: 15px;
    position: absolute;
    left: 15px;
    top: 15px;
    border-radius: 9999px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    box-shadow: 0ch;
    background: var(--color-light);
    transition: .5s;

    &:hover {
      box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14),
        0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);
      background: #fff;
    }
  }
`;

export const CenterBox = styled.div`
  max-width: 500px;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14),
    0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);

  & > span {
    padding: 15px;
    font-size: 20px;
    font-weight: 800;
    font-style: italic !important;
    text-align: center;
  }

  form {
    #password {
      margin-bottom: 0 !important;
    }

    a {
      color: var(--color-dark);
      text-decoration: underline;
      font-size: 14px;
      font-weight: 600;
      margin: 8px 0px 24px;
      opacity: 0.8;
      transition: opacity 0.2s ease 0s;
      align-self: flex-start;

      &:hover {
        opacity: 1;
        text-decoration: none;
      }
    }
  }

  .signinOption {
    font-size: 14px;
    margin-top: 24px;
    color: var(--color-dark);
    text-align: center;

    a {
      color: var(--color-dark);
      text-decoration: underline;
      position: relative;
      margin-left: 5px;
      opacity: 0.8;
      transition: opacity 0.2s ease 0s;
      font-weight: 600;

      &:hover {
        opacity: 1;
        text-decoration: none;
      }
    }
  }

  button {
    display: block;
    background: var(--color-dark);
    color: var(--color-light);
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 15px;
    font-weight: bold;
    font-size: 12px;
    transition: 0.2s;
  }

  button:hover {
    background-color: #000;
    color: #fff;
  }
  @media screen and (max-width: 768px){
    margin-top: 20vh;
  }
`;

const glitchEffect = keyframes`
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const glitchEffect2 = keyframes`
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(-2px, -3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(-5px, -2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(-5px, -1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(-2px, -6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
`;

const glitchEffect3 = keyframes`
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(2px, 3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(5px, 2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(5px, 1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(2px, 6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-size: 1.6rem;
  font-family: "Pacifico";
  font-weight: 100;
  padding: 15px;

  a {
    color: var(--color-dark);
  }

  p {
    margin: 0 !important;
    line-height: 0 !important;

    span {
      font-family: "JetBrains Mono" !important;
    }

    &.glitch {
      animation: 2.5s ${glitchEffect} infinite;

      &:nth-child(2) {
        color: #67f3da;
        animation: 2.5s ${glitchEffect2} infinite;
      }

      &:nth-child(3) {
        color: #f16f6f;
        animation: 2.5s ${glitchEffect3} infinite;
      }
    }
  }

  @media screen and (max-width: 290px){
    font-size: 1.3rem;
  }
`;


export const ErrorBox = styled.div`
  background: var(--color-danger);
  color: var(--color-light);

  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
`; 