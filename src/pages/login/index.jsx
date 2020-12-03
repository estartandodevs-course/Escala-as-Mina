import styled from "styled-components";
import React from 'react';
import ReactDOM from 'react-dom';
import imgBackground from "../../assets/images/LoginBackground.png";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${imgBackground});
    background-size: cover;
    border: 1px solid #000000;
    box-sizing: border-box;
    width: 100vw;
    height: 100vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-repeat: no-repeat;

  }
`

const LoginBox = styled.div`
    position: absolute;
    left: 8.89%;
    right: 52.22%;
    top: 9.57%;
    bottom: 9.57%;
    background: #120E29;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`



export const LoginLayout = (props) => {
    const { children } = props;
    return (

        <React.Fragment>
            <GlobalStyle/>
            <LoginBox>

            </LoginBox>
        </React.Fragment>

    )
}