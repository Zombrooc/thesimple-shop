import styled, { keyframes } from "styled-components";

import htmlScreen from "../../../assets/images/html_screen.png";

const animateArrow = keyframes`
  0%{
    opacity: 0;
    transform: rotate(45deg) translate(-20px,-20px);
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: rotate(45deg) translate(20px,20px);
  }
`;

export const Container = styled.div`
  min-height: 100%;

  background-image: url(${htmlScreen});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-left: 20%;
  padding-right: 20%;

  /* display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column; */
  /* background: rgba(40, 42, 54, 0.5); */
  color: var(--color-light);

  .heading {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; */
    .text {
      font-size: 54px;
      font-weight: 600;
    }

    h2.text {
      font-size: 30px;
    }


    .wrapper {
      position: relative;

      .offset {
        position: absolute;
        /* top: 0;
        left: 0;
        transform: translateX(-50%); */
      }

      .text {
        white-space: nowrap;
        color: var(--color-danger);

        transition-duration: 1s;
      }
    }
  }

  .animate-before {
    transform: translateY(40px);
    opacity: 0;
    pointer-events: none;
  }

  .animate-after {
    transform: translateY(-40px);
    opacity: 0;
    pointer-events: none;
  }

  .arrow {
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    margin: 0 auto;
    margin-top: 25px;

    span {
      display: block;
      width: 30px;
      height: 30px;
      border-bottom: 5px solid var(--color-info);
      border-right: 5px solid var(--color-info);
      transform: rotate(45deg);
      margin: -10px;
      animation: ${animateArrow} 2s infinite;

      &:nth-child(2) {
        animation-delay: -0.2s;
      }

      &:nth-child(3) {
        animation-delay: -0.4s;
      }
    }
  }
`;
