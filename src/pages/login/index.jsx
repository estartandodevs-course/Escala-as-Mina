import styled from "styled-components";
import React from 'react';
import ReactDOM from 'react-dom';
import imgBackground from "../../assets/images/LoginBackground.png";
import { createGlobalStyle } from 'styled-components'
import LogoLogin from "../../assets/images/LogoLogin.png";

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