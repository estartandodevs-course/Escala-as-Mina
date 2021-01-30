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
import { getV } from "../../styles";

export const Input = (props) => {
  const { label, type, placeholder, onChange, team, ...restProps } = props;

  if (team) {
    restProps["type"] = "text";
    restProps["font"] = "Roboto";
    restProps["width"] = getV("648px", "w");
    restProps["marginBottom"] = "32px";
  }

  return (
    <>
      <StyledLabel team={team} {...restProps}>
        {label}
      </StyledLabel>
      {team ? (
        <StyledInput
          type={type}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          {...restProps}
        />
      ) : (
        <StyledInput type={type} placeholder={placeholder} {...restProps} />
      )}
    </>
  );
};

export const InputSearch = (props) => {
  const { placeholder, onClick } = props;
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
  const { type, placeholder, ...rest } = props;

  return (
    <StyledInputPlayer
      placeholder={placeholder}
      {...rest}
      {...playerObject[type]}
    />
  );
};
