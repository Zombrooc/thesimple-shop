import React from "react";
import { useState } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import Cards from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css";

export default function CardSection() {
  const [ccData, setCCData] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setCCData({
      ...ccData,
      focus: e.target.name,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCCData({
      ...ccData,
      [name]: value,
    });
  };

  return (
    <>
      <Cards
        cvc={ccData.cvc}
        expiry={ccData.expiry}
        focused={ccData.focus}
        name={ccData.name}
        number={ccData.number}
      />
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label for="name">Nome Completo</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Ex. Fulano de Tal "
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={7}>
            <FormGroup>
              <Label for="number">Número do Cartão</Label>
              <Input
                id="number"
                type="tel"
                name="number"
                maxLength="16"
                placeholder="Número do Cartão"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="expiry">Validade</Label>
              <Input
                id="expiry"
                type="text"
                name="expiry"
                placeholder="Validade do Cartão"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="cvc">CVV</Label>
              <Input
                id="cvc"
                type="number"
                name="cvc"
                placeholder="Código de Segurança (CVV)"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
}
