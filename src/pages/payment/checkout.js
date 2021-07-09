import React, { useState } from "react";
import { useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js"

// import InjectedCheckoutForm from "../../components/checkout/CheckoutForm";
import Cart from "../../components/cart/";
import CardSection from "../../components/checkout/CardSection";
import { PaymentMethod } from "../../styles/pages/payment/checkout";

function Checkout() {
  const [session, loading] = useSession();

  const cart = useSelector((state) => state.cart);

  const [inputData, setInputData] = useState({
    selectedOption: "creditCard",
  });

  const handleRadio = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setInputData({
      ...inputData,
      selectedOption: event.target.value,
    });
  };

  const handleInput = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(`/api/payment/checkout`, {
        ...inputData,
        products: cart.items,
        amount: cart.total,
        external_id: session?.id,
        name: session?.user?.name,
        email: session?.user?.email,
      })
      .then((res) => {
        console.log(res);
      });
  };

  // if (cart.items.length === 0 || !session) {
  //   Router.push("/");
  // }

  return (
    <Row>
      <Col style={{ paddingRight: "0px" }} sm={{ size: 3, order: 2 }}>
        <h1 style={{ margin: "20px" }}>Finalizar pedido</h1>
        <Cart />
      </Col>
      <Col style={{ paddingLeft: "5px" }} sm={{ size: 7, order: 1 }}>
        <Row>
          <Col>
            <h1 style={{ margin: "20px", textAlign: "center" }}>
              {" "}
              Método de Pagamento{" "}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <PaymentMethod>
              <div style={{ flex: 1 }}></div>
              <label>
                <input
                  type="radio"
                  name="selectedOption"
                  value="bankSlip"
                  checked={inputData.selectedOption === "bankSlip"}
                  onChange={handleRadio}
                />
                <span>Boleto Bancário</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="selectedOption"
                  value="creditCard"
                  checked={inputData.selectedOption === "creditCard"}
                  onChange={handleRadio}
                />
                <span>Cartão de Crédito</span>
              </label>
              <div style={{ flex: 1 }}></div>
            </PaymentMethod>
          </Col>
        </Row>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="cpf"
            onChange={handleInput}
            value={inputData?.cpf}
            placeholder="CPF"
          />

          <button type="submit"> Get order </button>
        </form> */}
        {inputData.selectedOption === "creditCard" ? (
          <CardSection/>
        ) : (
          <h1>Aqui vai ter o form do boleto</h1>
        )}
      </Col>
    </Row>
  );
}

export default Checkout;
