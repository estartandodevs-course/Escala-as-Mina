import React, { useState } from "react";
import { Button, ListItem } from "../";

export const CreatePlayer = () => {
  const [showInput, setShowInput] = useState(false);

  function handleClick() {
    setShowInput((state) => !state);
  }

  return (
    <>
      {showInput ? (
        <ListItem type="player" variation="add" />
      ) : (
        <Button
          size="large"
          variation="secondary"
          type="solid"
          onClick={handleClick}
        >
          Adicionar Jogadora
        </Button>
      )}
    </>
  );
};
