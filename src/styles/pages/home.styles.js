import styled, { keyframes } from "styled-components";

import BG from "../../assets/images/stacked-waves-haikei.svg";

export const Container = styled.div``;

export const CardContainer = styled.div`
  width: 100%;
  background: var(--color-light);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  .container {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .container .card {
    position: relative;
    cursor: pointer;
  }

  .container .card .face {
    width: 300px;
    height: 200px;
    transition: 0.5s;
  }

  .container .card .face.face1 {
    position: relative;
    background: var(--color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
    border: 1px solid #ddd;
  }

  .container .card:hover .face.face1 {
    background: var(--color-danger);
    transform: translateY(0);
  }

  .container .card .face.face1 .content {
    opacity: 0.2;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
  }

  .container .card:hover .face.face1 .content {
    opacity: 1;
  }

  .container .card .face.face1 .content img {
    max-width: 100px;
  }

  .container .card .face.face1 .content h3 {
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
  }

  .container .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    transform: translateY(-100px);
    border: 1px solid #ddd;
  }

  .container .card:hover .face.face2 {
    transform: translateY(0);
  }

  .container .card .face.face2 .content p {
    margin: 0;
    padding: 0;
  }

  .container .card .face.face2 .content a {
    margin: 15px 0 0;
    display: inline-block;
    text-decoration: none;
    font-weight: 900;
    color: var(--color-dark);
    padding: 5px;
    border: 1px solid var(--color-dark);
  }

  .container .card .face.face2 .content a:hover {
    background: var(--color-dark);
    color: #fff;
  }
`;

export const Landing = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2.54rem;

  canvas {
    display: block;
  }

  #tsparticles {
    width: 100%;
    height: 100%;
    padding: 0 80px;
    z-index: -4444;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${BG});
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  top: 0;

  color: var(--color-light);

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .callToAction {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px;
    font-size: 1.5rem;

    a {
      border: none;
      border: 2px solid var(--color-danger);
      color: var(--color-light);
      background: var(--color-danger);
      padding: 15px 25px;
      margin-top: 100px;
      border-radius: 10000px;
      cursor: pointer;
      transition: color 0.5s, background 0.5s;

      &:hover {
        color: var(--color-danger);
        background: transparent;
      }

      @media screen and (max-width: 550px) {
        color: var(--color-light);
      }
    }
  }

  hr {
    width: 65%;
  }

  h2.brand {
    font-size: 1.5rem;
    margin-top: 15px;
  }

  @media screen and (max-width: 550px) {
    h2.brand {
      font-size: 1rem;
    }
  }
`;

export const Title = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  padding: 15px;

  h1 {
    font-size: 4rem;
  }

  @media screen and (max-width: 590px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 460px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 320px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
