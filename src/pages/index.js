import axios from "axios";
import React from "react";

// import { Container } from "../styles/pages/home.styles";

export default function Home({ products }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1> {product.title} </h1>
          <h3>{product.price}</h3>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps({ req }) {
  const products = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`, {responseType: 'json'}
  );
  
  return {
    props: {
      products: products.data,
    },
  };
}
