import React from "react";
import axios from "axios";
import { signIn, signOut } from "next-auth/client";
import { useSession } from "next-auth/client";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';

import { add_item } from "../store/ducks/cart";

// import { Container } from "../styles/pages/home.styles";

export default function Home({ products }) {
  const [session, loading] = useSession();

  const cart = useSelector((state) => state.cart);

  console.log(cart);

  const dispatch = useDispatch();

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign In
        </button>
      </div>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    );
  };

  if (!session) {
    return (
      <div className="hero">
        <div className="navbar">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="text">You authorized to view this page</div>
      </div>
    );
  }

  return (
    <div className="hero">
      <div className="navbar">
        {signOutButtonNode()}
        {signInButtonNode()}
      </div>
      <div className="text">
        {products.map((product) => (
          <div key={product.id}>
            <h1> {product.title} </h1>
            <h3>{product.price}</h3>
            <div className="card-footer">
              <button onClick={() => dispatch(add_item(product))}>
                + Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link href="/payment/checkout">
        <a> ashasuhuh </a>
      </Link>
    </div>
  );
}

export async function getServerSideProps() {


  const products = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    { responseType: "json" }
  );

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: products.data,
    }
  };
}
