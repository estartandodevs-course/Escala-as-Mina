import React, { useState } from 'react';
import { Button, ListItem } from '../';

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

      {showInput && <ListItem type="player" variation="add" />}
    </>
  );
};
