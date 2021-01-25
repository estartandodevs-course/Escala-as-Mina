import * as C from "../../../components";
import { useState } from "react";

export const LinkPlayers = () => {
  const positionSection = "GOL";
  const [players, setPlayers] = useState([
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
              set={setPlayers}
              id={player.id}
            >
              <>{player.number}</>
              <>{positionSection}</>
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
