import axios from "axios";
import React, { useContext } from "react";

import AppContext from "../context/AppContext";

// import { Container } from "../styles/pages/home.styles";

export default function Home({ products }) {
  const appContext = useContext(AppContext);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1> {product.title} </h1>
          <h3>{product.price}</h3>
          <div className="card-footer">
            <button onClick={() => appContext.addItem(product)}>
              + Add To Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps({ req }) {
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
    },
  };
}
