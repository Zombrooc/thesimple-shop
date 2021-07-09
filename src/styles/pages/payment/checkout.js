import styled from "styled-components";

export const PaymentMethod = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
  }

  label input {
    position: absolute;
    left: -9999px;
  }

  label input:checked + span {
    background-color: #d6d6e5;
  }

  label input:checked + span:before {
    box-shadow: inset 0 0 0 0.4375em #00005c;
  }

  label span {
    display: flex;
    align-items: center;
    padding: 0.375em 0.75em 0.375em 0.375em;
    border-radius: 99em;
    transition: 0.25s ease;
  }

  label span:hover {
    background-color: #d6d6e5;
  }

  label span:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #fff;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.375em;
    transition: 0.25s ease;
    box-shadow: inset 0 0 0 0.125em #00005c;
  }
`;
