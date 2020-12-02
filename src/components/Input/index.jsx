import React from "react";
import {
  StyledLabel,
  StyledDiv,
  StyledInput,
  StyledInputSearch,
  StyledInputPlayer,
} from "./styledInput";
import LupaInput from "../../assets/icons/LupaInput.svg";
import { Button, Typography } from "../";
import { useTheme } from "styled-components";

export const Input = (props) => {
  const { label, type, placeholder } = props;

  return (
    <form>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} placeholder={placeholder} />
    </form>
  );
};

//placeholder function
function handleClick(e) {
  e.preventDefault();
  console.log("O link foi clicado.");
}

export const InputSearch = (props) => {
  const { placeholder, onClick = handleClick } = props;
  const theme = useTheme();

  return (
    <StyledDiv>
      <img src={LupaInput} alt="Lupa" />
      <StyledInputSearch type={"text"} placeholder={placeholder} />
      <Button variation="search" onClick={onClick}>
        <Typography type="span" color={theme.pallete.secondary.main}>
          Pesquisar
        </Typography>
      </Button>
    </StyledDiv>
  );
};

const playerObject = {
  number: {
    placeholder: "Nº da jogadora",
    width: "140px",
  },
  name: {
    placeholder: "Nome da jogadora",
    width: "453px",
  },
};
export const InputPlayer = (props) => {
  const { type, placeholder } = props;

  return (
    <StyledInputPlayer placeholder={placeholder} {...playerObject[type]} />
  );
};
