import React from "react";
import Head from "next/head";
import { Provider } from "next-auth/client";
import { Container } from "reactstrap";

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
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        {/* <Script src="https://js.stripe.com/v3" /> */}
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
      <GlobalStyles />
      {/* <style jsx global>
        {`
          a {
            color: white !important;
          }
          a:link {
            text-decoration: none !important;
            color: white !important;
          }
          a:hover {
            color: white;
          }
          .card {
            display: inline-block !important;
          }
          .card-columns {
            column-count: 3;
          }
        `}
      </style> */}
    </Provider>
  );
}

export default store.withRedux(MyApp);
