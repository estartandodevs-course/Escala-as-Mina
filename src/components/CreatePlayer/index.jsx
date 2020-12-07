import React, { useState } from 'react';
import { InputPlayer } from '../Input';
import { Button } from '../Button';
import AcceptBtn from '../../assets/icons/AcceptBtn.svg';
import DeclineBtn from '../../assets/icons/DeclineBtn.svg';
import { PlayerInfo } from './styledCreatePlayer';

export const CreatePlayer = () => {
  const [showInput, setShowInput] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  function handleClick() {
    setShowBtn(false);
    setShowInput(true);
  }

  return (
    <>
      {showBtn && (
        <Button
          size="large"
          variation="secondary"
          type="solid"
          onClick={handleClick}
        >
          Adicionar Jogadora
        </Button>
      )}

      {showInput && (
        <PlayerInfo>
          <InputPlayer type="number" />
          <InputPlayer type="name" />
          <Button type="icon">
            <img src={AcceptBtn} alt="Aceitar" />
          </Button>
          <Button type="icon">
            <img src={DeclineBtn} alt="Deletar" />
          </Button>
        </PlayerInfo>
      )}
    </>
  );
};
