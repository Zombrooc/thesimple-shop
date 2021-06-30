import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-success: #32d15d;
    --color-attention: #e8dc2e;
    --color-danger: #ff5555;
    --color-dark: #282a36;
    --color-info: #24b0e3;
    --color-light: #f5f5f5;

    font-family: "Nunito", sans-serif;
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    min-height: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: var(--color-dark);
    background: var(--color-light);
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button {
    color: var(--color-dark);
  }

  a {
    text-decoration: none;
    color: var(--color-dark);
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: stretch; */
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input, select, textarea {
    width: 100%;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
    padding: 12px 16px;
  }

  textarea{
    height: 100px;
  }

  .css-62g3xt-dummyInput {
    padding: 0 !important;
  }

  input:focus {
    border-color: var(--color-dark);
  }

  input.hasError {
    border-color: var(--color-danger);
  }

  button {
    display: block;
    background: var(--color-dark);
    color: var(--color-light);
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #2e2e2e;
  }
`;
