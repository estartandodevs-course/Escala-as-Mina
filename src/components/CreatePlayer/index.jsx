import { useState } from "react";
import { Button, ListItem } from "../";

export const CreatePlayer = ({ dispatch }) => {
  const [showInput, setShowInput] = useState(false);

  function handleClick() {
    setShowInput((state) => !state);
  }

  return (
    <>
      {showInput ? (
        <ListItem data={{}} type="player" dispatch={dispatch} variation="add" />
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
