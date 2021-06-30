import React from "react";
import Head from "next/head";
import axios from "axios";
import { getSession, signIn } from "next-auth/client";

import {
  CenterBox,
  Container,
} from "../../styles/pages/confirmation/account-confirmed.styles";
import { Router } from "next/router";

export default function AccountConfirmed({ confirmed }) {
  function Success() {
    return (
      <Container>
        <Head>
          <title> E-mail Confirmado - Synapse </title>
        </Head>
        <CenterBox>
          <div className="f-modal-alert">
            <div className="f-modal-icon f-modal-success animate">
              <span className="f-modal-line f-modal-tip animateSuccessTip"></span>
              <span className="f-modal-line f-modal-long animateSuccessLong"></span>
              <div className="f-modal-placeholder"></div>
              <div className="f-modal-fix"></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              className="em em-flag-br"
              style={{ fontSize: "2rem", margin: "20px" }}
            ></i>
            <h1> VAI BRASILLL!!! </h1>
            <i
              className="em em-flag-br"
              style={{ fontSize: "2rem", margin: "20px" }}
            ></i>
          </div>
          <p>
            {" "}
            Estamos muito felizes por ter você como nosso aluno e esperamos que
            goste dessa nova jornada de aprendizado.
          </p>
          <p>
            {" "}
            Sua conta foi confirmada com sucesso, agora nossa plataforma já está
            liberada para acesso.
          </p>
          <br />
          <button
            onClick={() => signIn()}
            style={{ background: "var(--color-success)" }}
          >
            {" "}
            Acessar Plataforma{" "}
          </button>
        </CenterBox>
      </Container>
    );
  }

  function Error() {
    return (
      <Container>
        <Head>
          <title> Erro - Synapse </title>
        </Head>
        <CenterBox>
          <div className="f-modal-alert">
            <div className="f-modal-icon f-modal-error animate">
              <span className="f-modal-x-mark">
                <span className="f-modal-line f-modal-left animateXLeft"></span>
                <span className="f-modal-line f-modal-right animateXRight"></span>
              </span>
              <div className="f-modal-placeholder"></div>
              <div className="f-modal-fix"></div>
            </div>
          </div>

          <p>Parece que tivemos um pequeno problema ao confirmar o seu email</p>
          <p>Por favor, tente novamente em alguns minutos.</p>
        </CenterBox>
      </Container>
    );
  }

  return confirmed ? <Success /> : <Error />;
}

export const getServerSideProps = async (context) => {
  const { params, req } = context;

  const session = await getSession({ req });

  if (session){
    Router.push('/')
  }

  const token = params.token;

  try {
    let confirmed = null;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/email-confirmation?confirmation=${token}`
    );

    if (response.status === 200) {
      confirmed = true;
    }

    return {
      props: {
        confirmed,
      },
    };
  } catch (error) {
    return {
      props: {
        confirmed: false,
      },
    };
  }
};
