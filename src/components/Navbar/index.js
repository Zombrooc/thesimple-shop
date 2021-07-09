import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";

import useWindowSize from "../useWindowSize.js";

import logoWithoutTagline from "../../assets/images/logoWithoutTagline.svg";

import {
  Nav,
  Container,
  Title,
  Menu,
  MenuItem,
  ToggleButton,
  CloseIcon,
} from "./styles";

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const [session, loading] = useSession();

  const size = useWindowSize();

  const menuHandler = () => {
    setMenuStatus(!menuStatus);
  };

  useEffect(() => {
    if (size.width >= 960) {
      setMenuStatus(false);
    }
  }, [size.width]);

  return (
    <Nav>
      <Container>
        <Title>
          <Link href="/">
            <a>
              <Image src={logoWithoutTagline} alt="The Simple TECH" />
            </a>
          </Link>
        </Title>
        <ToggleButton onClick={menuHandler}>
          {!menuStatus && <MdMenu />}
        </ToggleButton>
        <Menu isOpen={menuStatus}>
          <CloseIcon isOpen={menuStatus} onClick={menuHandler}>
            <MdClose />
          </CloseIcon>
          {!session && (
            <>
              <MenuItem>
                <Link href="/auth/signin">
                  <a>Cadastrar</a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/auth/signup">
                  <a>Cadastrar</a>
                </Link>
              </MenuItem>
            </>
          )}
          {session && (
            <>
              <MenuItem>
                <Link href="/">
                  <a> {session.user.name}</a>
                </Link>
              </MenuItem>
              <MenuItem>
                <a
                  onClick={() => signOut()}
                  style={{ color: "var(--color-light)" }}
                >
                  Sair
                </a>
              </MenuItem>
            </>
          )}
          <MenuItem>
            <Link href="/payment/checkout">
              <a className="active">
                <strong>Finalizar compra</strong>
              </a>
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
