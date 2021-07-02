import React, { useContext } from "react";
import { getSession } from "next-auth/client"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import InjectedCheckoutForm from "../../components/checkout/CheckoutForm";
import Cart from "../../components/cart/";
import { useSelector } from "react-redux";

function Checkout() {
  // get app context
  // load stripe to inject into elements components
  const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC}`);

  const cart = useSelector(state => state.cart);

  console.log(cart);

  return (
    <div>
      <div style={{ paddingRight: 0 }}>
        <h1 style={{ margin: 20 }}>Checkout</h1>
        <Cart />
      </div>
      <div style={{ paddingLeft: 5 }}>
        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm />
        </Elements>
      </div>
    </div>
  );
  // }
}

export async function getServerSideProps(ctx){
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}

export default Checkout;