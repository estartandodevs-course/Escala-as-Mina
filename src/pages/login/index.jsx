import React from 'react';
import LogoLogin from "../../assets/images/LogoLogin.png";
import { Button } from "../../components/Button";
import "fontsource-roboto";
import {
  GlobalStyle,
  LoginBox,
  Logo,
  LoginContainer,
  ContainerUser,
  ContainerPassword
} from "./styledPage.jsx"

export const LoginLayout = (props) => {
    const { children } = props;
    return (

        <React.Fragment>
            <GlobalStyle/>
            <LoginBox>
                <Logo>
                  <img src={LogoLogin} alt="DiarioFFemnino"/>
                </Logo>
                <LoginContainer>
                  <ContainerUser>
                    Email 
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    >
                    </input>
                  </ContainerUser>
                  <ContainerPassword>
                    Senha
                    <input 
                    type="password" 
                    placeholder="Senha"
                    >
                    </input>
                  </ContainerPassword>
                  <Button
                    type="solid"
                    variation="primary"
                    size="normal"
                  >
                    Entrar
                  </Button>
                </LoginContainer>
            </LoginBox>
        </React.Fragment>
    )
}