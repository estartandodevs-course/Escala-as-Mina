import styled from "styled-components";
import React from 'react';
import imgBackground from "../../assets/images/LoginBackground.png";
import { createGlobalStyle } from 'styled-components'
import LogoLogin from "../../assets/images/LogoLogin.png";
import { Button } from "../../components/Button";

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
  justify-content: center;
`

function EmailValidation (field) {
  user = props.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

  if ((user.length >=1) &&
      (dominio.length >=3) &&
      (user.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (user.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1) &&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById ().innerHTML="Tudo OK com seu e-mail!";
        alert("email valido");
      }
  else {
    document.getElementById ().innerHTML="<font color ='red'> Seu e-mail é inválido </font>";
    alert("email invalido");
  }
}



export const LoginLayout = (props) => {
    const { children } = props;
    return (

        <React.Fragment>
            <GlobalStyle/>
            <LoginBox>
                <Logo>
                    <img src={LogoLogin} alt="DiarioFFemnino"/>
                </Logo>

            </LoginBox>
        </React.Fragment>

    )
}