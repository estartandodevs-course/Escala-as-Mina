import * as C from "../../../components";
import { useReducer } from "react";

export const LinkPlayers = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "deletePlayer":
        const id = action.payload;
        const newState = [...state].filter((player) => player.id !== id);
        return newState;
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
    },
    {
      number: "02",
      name: "Eduarda Jasmim",
      id: 2,
      show: true,
    },
    {
      number: "03",
      name: "Cristina Santos",
      id: 3,
      show: false,
    },
  ]);

  return (
    <C.FlexContainer align="flex-start" justify="flex-start" direction="column">
      {players.map((player, index) => {
        if (player.show) {
          return (
            <C.ListItem
              key={index}
              variation="edit"
              type="player"
              dispath={dispatch}
              id={player.id}
            >
              <>{player.number}</>
              <>{player.positionSection}</>
              <>{player.name}</>
            </C.ListItem>
          );
        } else {
          return "";
        }
      })}

      <C.CreatePlayer />
    </C.FlexContainer>
  );
};
