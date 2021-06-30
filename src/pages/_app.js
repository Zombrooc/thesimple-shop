import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Provider } from "next-auth/client";
import Cookie from "js-cookie";

import AppContext from "../context/AppContext";

import GlobalStyles from "../styles/GlobalStyles";
import "../styles/externalImports.module.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({ items: [], total: 0 });

  useEffect(() => {
    if (typeof cart === "string" && cart !== "undefined") {
      console.log("foyd");
      JSON.parse(cart).forEach((item) => {
        setCart({ items: JSON.parse(cart), total: item.price * item.quantity });
      });
    }
  }, [cart]);

  const addItem = (item) => {
    let { items } = cart;

    console.log(cart);
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    const newItem = items.find((i) => i.id === item.id);
    // if item is not new, add to cart, set quantity to 1
    if (!newItem) {
      //set quantity property to 1
      item.quantity = 1;
      console.log(cart.total, item.price);

      setCart(() => {
        Cookie.set("cart", cart.items);

        return {
          items: [...items, item],
          total: cart.total + item.price,
        };
      });
    } else {
      setCart(() => {
        Cookie.set("cart", cart.items);

        return {
          items: cart.items.map((item) =>
            item.id === newItem.id
              ? Object.assign({}, item, { quantity: item.quantity + 1 })
              : item
          ),
          total: cart.total + item.price,
        };
      });
    }
  };

  const removeItem = (item) => {
    let { items } = cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    const newItem = items.find((i) => i.id === item.id);
    if (newItem.quantity > 1) {
      setCart(() => {
        Cookie.set("cart", items);

        return {
          items: cart.items.map((item) =>
            item.id === newItem.id
              ? Object.assign({}, item, { quantity: item.quantity - 1 })
              : item
          ),
          total: cart.total - item.price,
        };
      });
    } else {
      const items = [...cart.items];
      const index = items.findIndex((i) => i.id === newItem.id);

      items.splice(index, 1);

      setCart(() => {
        Cookie.set("cart", items);

        return { items: items, total: cart.total - item.price };
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
      }}
    >
      <Provider
        session={pageProps.session}
        options={{
          clientMaxAge: 60,
          keepAlive: 5 * 60,
        }}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>
    </AppContext.Provider>
  );
}

export default MyApp;
