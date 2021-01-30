import { useReducer } from "react";
import * as C from "../../../components";
import { v4 as uuidv4 } from "uuid";

export const LinkPlayers = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "addPlayer": {
        action.payload.id = uuidv4();
        console.log(action.payload.id);
        const newState = [...state, action.payload];
        return newState;
      }
      case "deletePlayer": {
        const id = action.payload;
        const newState = [...state].filter((player) => player.id !== id);
        return newState;
      }
      default:
    }
  };
  const [players, dispatch] = useReducer(reducer, [
    //eventually this will be a firebase request
    {
      number: "01",
      name: "Camile Perreira",
      id: 1,
      show: true,
      positionSection: "gol",
    },
    {
      number: "02",
      name: "Eduarda Jasmim",
      id: 2,
      show: true,
      positionSection: "gol",
    },
    {
      number: "03",
      name: "Cristina Santos",
      id: 3,
      show: false,
      positionSection: "gol",
    },
  ]);

  return (
    <C.FlexContainer align="flex-start" justify="flex-start" direction="column">
      {players.map((player, index) => {
        return (
          <>
            {player.show && (
              <C.ListItem
                key={index}
                variation="edit"
                type="player"
                data={player}
                dispatch={dispatch}
                id={player.id}
              />
            )}
          </>
        );
      })}

      <C.CreatePlayer dispatch={dispatch} />
    </C.FlexContainer>
  );
};
