import React, { useState } from "react";
import LogoLogin from "../../assets/images/LogoLogin.png";
import "fontsource-roboto";
import * as S from "./styledPage";
import firebase from "firebase/app";
import "firebase/auth";

export const LoginLayout = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { type, value } = event.target;

    const copyUser = { ...user };

    copyUser[type] = value;

    setUser(copyUser);
  };
  const handleEnter = (event) => {
    if (event.keyCode === 13) handleSubmit();
  };
  const handleSubmit = async () => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  };

  return (
    <S.LoginWrapper>
      <S.LoginBox>
        <S.Logo>
          <img src={LogoLogin} alt="DiarioFFeminino" />
        </S.Logo>
        <S.LoginContainer>
          <S.ContainerUser className="dados">
            Email
            <input
              type="email"
              placeholder="E-mail"
              onChange={(event) => handleChange(event)}
              onKeyDown={handleEnter}
              value={user.email}
            />
          </S.ContainerUser>
          <S.ContainerPassword className="dados">
            Senha
            <input
              type="password"
              placeholder="Senha"
              onChange={(event) => handleChange(event)}
              onKeyDown={handleEnter}
              value={user.password}
            />
          </S.ContainerPassword>
        </S.LoginContainer>
        <S.SubmitButton
          type="solid"
          variation="primary"
          size="normal"
          onClick={handleSubmit}
          loading="ana"
        >
          Entrar
        </S.SubmitButton>
      </S.LoginBox>
    </S.LoginWrapper>
  );
};
