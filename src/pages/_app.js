import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Provider } from "next-auth/client";
import { Provider as ReduxProvider } from "react-redux";
import withRedux from "next-redux-wrapper";

import { store } from "../store/index";

import GlobalStyles from "../styles/GlobalStyles";
import "../styles/externalImports.module.css";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default store.withRedux(MyApp);
