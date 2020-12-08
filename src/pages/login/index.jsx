import styled from "styled-components";
import React from 'react';
import imgBackground from "../../assets/images/LoginBackground.png";
import { createGlobalStyle } from 'styled-components'
import LogoLogin from "../../assets/images/LogoLogin.png";
import { Button } from "../../components/Button";
import "fontsource-roboto";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${imgBackground});
    background-size: cover;
  }
`

const LoginBox = styled.div`
    position: absolute;
    left: 8.89%;
    right: 52.22%;
    top: 9.57%;
    bottom: 9.57%;
    background: ${props => props.theme.pallete.background.blue};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  button {
    margin-top: 60px;
    font-family: "roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
  }


`
const ContainerUser = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "roboto";
  color: ${(props) => props.theme.pallete.secondary.lighter};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  justify-content: space-between;
  margin-top: 50px;

  input{
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: ${(props) => props.theme.pallete.gray.black};
    font-weight: 500;
    line-height: 19px;
    padding-left: 16px;
    height: 48px;
    border: 2px solid ${(props) => props.theme.pallete.gray.firstGray};
    border-radius: 10px;
    width: 432px;
    height: 47.4141px;
    margin-top: 15px;

    ::-webkit-inline-placeholder {
      color: ${(props) => props.theme.pallete.gray.secondGray};
    }

    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.pallete.secondary.main};
    }
  }

`
const ContainerPassword = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "roboto";
  color: ${(props) => props.theme.pallete.secondary.lighter};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  justify-content: space-between;
  margin-top: 30px;

  input{
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: ${(props) => props.theme.pallete.gray.black};
    font-weight: 500;
    line-height: 19px;
    padding-left: 16px;
    height: 48px;
    border: 2px solid ${(props) => props.theme.pallete.gray.firstGray};
    border-radius: 10px;
    width: 432px;
    height: 47.4141px;
    margin-top: 15px;

    ::-webkit-inline-placeholder {
      color: ${(props) => props.theme.pallete.gray.secondGray};
    }

    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.pallete.secondary.main};
    }
  }

`

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