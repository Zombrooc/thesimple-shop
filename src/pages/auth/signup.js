import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { providers, signIn, getSession } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Head from "next/head";
import axios from "axios";

import {
  Container,
  CenterBox,
  Title,
  ErrorBox,
} from "../../styles/pages/auth/signup.styles";

const errors = {
  400: `Já existe um usuário cadastrado com esse e-mail.`,
  1: "As senhas digitadas não combinam",
};

export default function SignUp({ providers }) {
  const router = useRouter();

  const [errorStatus, setErrorStatus] = useState();
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (event) => {
    if (event.target.name === "confirm_password") {
      if (!(inputData.password === inputData.confirm_password)) {
        setErrorStatus(1);
        setInputData({
          ...inputData,
          password: "",
          confirm_password: "",
        });
      }
    }
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: inputData.username || inputData.email.split('@')[0],
      email: inputData.email,
      password: inputData.password,
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, data)
      .then((response) => {

        if (response.status === 200){
          router.push("/confirmation/email-sended");
        }
      })
      .catch((error) => {
        setErrorStatus(error.response.status);
      });
  };

  return (
    <>
      <Head>
        <title>Criar conta - The Simple TECH</title>
      </Head>
      <Container>
        <div className="pushBack" onClick={() => router.push("/")}>
          <AiOutlineArrowLeft />    Voltar para o início
        </div>
        <CenterBox>
          <Title>
            <Link href="/">
              <a>
                <p className="glitch">
                  The Simple <span>TECH</span>
                </p>
                <p className="glitch">
                  The Simple <span>TECH</span>
                </p>
                <p className="glitch">
                  The Simple <span>TECH</span>
                </p>
              </a>
            </Link>
          </Title>
          <h1>
            <span> Criar sua conta </span>
          </h1>
          {errorStatus && <ErrorBox>{errors[errorStatus]}</ErrorBox>}
          <form onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                name="username"
                type="text"
                onChange={handleInput}
                value={inputData.username}
                required={true}
              />
            </label>
            <label>
              E-mail
              <input
                name="email"
                type="email"
                onChange={handleInput}
                value={inputData.email}
                required={true}
              />
            </label>
            <label>
              Senha
              <input
                name="password"
                type="password"
                onChange={handleInput}
                value={inputData.password}
                required={true}
                minLength="8"
              />
            </label>
            <label>
              Confirmar senha
              <input
                name="confirm_password"
                type="password"
                onChange={handleInput}
                value={inputData.confirm_password}
                required={true}
                minLength="8"
              />
            </label>
            <button type="submit"> CADASTRAR </button>
          </form>
          <div className="signinOption">
            Já tem uma conta?
            <Link href="/auth/signin">
              <a>Entrar Agora</a>
            </Link>
          </div>
          <br />
          <hr style={{ width: "100%" }} />
          <br />
          {Object.values(providers)
            .filter((provider) => (provider.name === "Google" ? true : false))
            .map((provider) => (
              <div key={provider.name} style={{ width: "100%" }}>
                <button
                  onClick={() => signIn(provider.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FcGoogle style={{ fontSize: "20px" }} />      Entrar com o{" "}
                  {provider.name}
                </button>
              </div>
            ))}
        </CenterBox>
      </Container>
    </>
  );
}

export async function getServerSideProps({ req }) {

  const session = await getSession({req});

  if (session){
    router.push('/')
  }

  return {
    props: {
      providers: await providers()
    },
  };
}
