import React, { useState } from 'react';
import { InputPlayer } from '../Input';
import { Button } from '../Button';
import AcceptBtn from '../../assets/icons/AcceptBtn.svg';
import DeclineBtn from '../../assets/icons/DeclineBtn.svg';
import { AddPlayerBtn, PlayerInfo } from './styledCreatePlayer';

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
        <AddPlayerBtn type="icon" onClick={handleClick}>
          Adicionar Jogadora
        </AddPlayerBtn>
      )}

      {showInput && (
        <PlayerInfo>
          <InputPlayer type="number" />
          <InputPlayer type="name" />
          <Button type="icon">
            <img src={AcceptBtn} alt="Accept"></img>
            <img src={DeclineBtn} alt="Accept"></img>
          </Button>
        </PlayerInfo>
      )}
    </>
  );
};
