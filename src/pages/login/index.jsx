import React, { useState } from "react";
import LogoLogin from "../../assets/images/LogoLogin.png";
import "fontsource-roboto";
import * as S from "./styledPage";
import { Head } from "../../components";
import { login } from "../../service/auth.service";

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
    login(user.email, user.password);
  };

  return (
    <S.LoginWrapper>
      <Head title="login" />
      <S.LoginBox>
        <S.Logo>
          <img src={LogoLogin} alt="DiarioFFeminino" />
        </S.Logo>
        <S.LoginContainer>
          <S.ContainerInput className="dados">
            Email
            <input
              type="email"
              placeholder="E-mail"
              onChange={(event) => handleChange(event)}
              onKeyDown={handleEnter}
              value={user.email}
            />
          </S.ContainerInput>
          <S.ContainerInput className="dados">
            Senha
            <input
              type="password"
              placeholder="Senha"
              onChange={(event) => handleChange(event)}
              onKeyDown={handleEnter}
              value={user.password}
            />
          </S.ContainerInput>
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
