import React from 'react';
import {
  StyledDiv,
  StyledInput,
  StyledInputSearch,
  StyledInputOptions,
} from './styledInput';
import LupaInput from '../../assets/icons/LupaInput.svg';
import AcceptBtn from '../../assets/icons/AcceptBtn.svg';
import DeclineBtn from '../../assets/icons/DeclineBtn.svg';
import { Button } from '../Button';

export const Input = (props) => {
  const { label, type, placeholder } = props;

  return (
    <form>
      <label>{label}</label>
      <StyledInput type={type} placeholder={placeholder} />
    </form>
  );
};

export const InputSearch = (props) => {
  const { placeholder } = props;

  function handleClick(e) {
    e.preventDefault();
    console.log('O link foi clicado.');
  }

  return (
    <StyledDiv>
      <img src={LupaInput} alt="Lupa" />
      <StyledInputSearch type={'text'} placeholder={placeholder} />
      <Button variation="search" onClick={handleClick}>
        Pesquisar
      </Button>
    </StyledDiv>
  );
};

export const InputPlayer = () => {
  return (
    <StyledInputOptions>
      <input
        className="numberPlayer"
        type="number"
        placeholder="Nº da jogadora"
      />
      <input
        className="namePlayer"
        type="text"
        placeholder="Nome da jogadora"
      />
      <div>
        <a href="/">
          <img src={AcceptBtn} alt="Accept"></img>
        </a>
        <a href="/">
          <img src={DeclineBtn} alt="Decline"></img>
        </a>
      </div>
    </StyledInputOptions>
  );
};
