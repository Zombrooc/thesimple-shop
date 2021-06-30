import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: relative;

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
    transition: 0.5s;

    &:hover {
      box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14),
        0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);
      background: #fff;
    }
  }
`;

export const CenterBox = styled.div`
  max-width: 100%;
  width: 500px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin: 20px;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14),
    0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);

  /* & > span {
    padding: 15px;
    font-size: 20px;
    font-weight: 800;
    font-style: italic !important;
    text-align: center;
  } */

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 25px;
    margin-bottom: 6px;
  }

  h2 {
    font-size: 15px;
    font-family: "Open Sans";
    font-weight: 400;
  }

  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--color-dark);
    margin-top: 15px;
    margin-bottom: 15px;
  }

  form {
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

  @media screen and (max-width: 768px) {
    margin-top: 20vh;
  }
`;

export const Success = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  text-align: center;
  padding: 40px 0;
  background: var(--color-light);
  h1 {
    color: var(--color-success);
    font-family: Nunito;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    color: var(--color-dark);
    font-family: Nunito;
    font-size: 20px;
    margin: 0;
  }
  i {
    color: var(--color-success);
    font-size: 100px;
    line-height: 200px;
    margin-left: -15px;
  }
  .card {
    background: white;
    padding: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #c8d0d8;
    display: inline-block;
    margin: 0 auto;
  }
`;
