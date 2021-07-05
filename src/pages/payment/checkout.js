import React from "react";
import { getSession } from "next-auth/client";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

import InjectedCheckoutForm from "../../components/checkout/CheckoutForm";
import Cart from "../../components/cart/";

function Checkout({ session }) {
  const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC}`);
  const cart = useSelector((state) => state.cart);

  // if (cart.items.length === 0 || !session) {
  //   Router.push("/");
  // }

  return (
    <Row>
      <Col
        style={{ paddingRight: "0px" }}
        sm={{ size: 3, order: 1, offset: 2 }}
      >
        <h1 style={{ margin: "20px" }}>Checkout</h1>
        <Cart />
      </Col>
      <Col style={{ paddingLeft: "5px" }} sm={{ size: 6, order: 2 }}>
          <Elements stripe={stripePromise}>
            <InjectedCheckoutForm context={cart} />
          </Elements>
      </Col>
    </Row>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      session: await getSession(),
    },
  };
}

export default Checkout;
