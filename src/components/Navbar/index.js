import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";

import useWindowSize from "../useWindowSize.js";

import logoWithoutTagline from '../../assets/images/logoWithoutTagline.svg';

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
              <img src={logoWithoutTagline} alt="The Simple TECH"/>
            </a>
          </Link>
        </Title>
        {/* <ToggleButton onClick={menuHandler}>
          {!menuStatus && <MdMenu />}
        </ToggleButton>
        <Menu isOpen={menuStatus}>
          <CloseIcon isOpen={menuStatus} onClick={menuHandler}>
            <MdClose />
          </CloseIcon>
          {!session && (
            <>
              <MenuItem>
                  <a onClick={() => signIn()}>Entrar</a>
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
                <a onClick={() => signOut()}>
                  Sair
                </a>
              </MenuItem>
            </>
          )}
          <MenuItem>
            <Link href="/services/request-assistence">
              <a className="active"><strong>Solicitar Assistêcia Técnica</strong></a>
            </Link>
          </MenuItem>
        </Menu> */}
      </Container>
    </Nav>
  );
}

export default Navbar;
