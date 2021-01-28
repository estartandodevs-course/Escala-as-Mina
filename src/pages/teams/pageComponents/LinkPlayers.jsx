import { useReducer } from "react";
import { useTheme } from "styled-components";
import * as C from "../../../components";

export const LinkPlayers = () => {
  const theme = useTheme();
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
                dispath={dispatch}
                id={player.id}
              >
                <C.Typography
                  size="16px"
                  weight="700"
                  color={theme.pallete.gray.white}
                >
                  {player.number}
                </C.Typography>
                <C.Typography
                  textTransform="uppercase"
                  size="16px"
                  weight="700"
                  color={theme.pallete.secondary.main}
                >
                  {player.positionSection}
                </C.Typography>
                <C.Typography
                  size="16px"
                  weight="700"
                  color={theme.pallete.secondary.main}
                >
                  {player.name}
                </C.Typography>
              </C.ListItem>
            )}
          </>
        );
      })}

      <C.CreatePlayer />
    </C.FlexContainer>
  );
};
