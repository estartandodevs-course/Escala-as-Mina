import * as C from "../../components";
import { useState } from "react";
import { scoutPosition } from "./dataSctructure";

import * as M from "../../mocks";

export const Rodadas = () => {
  const players = M.getPlayers();
  const [formsTeam, setFormsTeam] = useState({
    players: players.map((player) => {
      return { ...player, score: 0, scouts: scoutPosition[player.position] };
    }),
    teamScout: [
      { key: "victory", state: true },
      { key: "noGoal", state: true },
    ],
  });

  const activePlayer = formsTeam.players[0];
  return (
    <C.FlexContainer direction="column" justify="flex-start" align="flex-end">
      <C.MatchScout forms={formsTeam} set={setFormsTeam} />
      <C.ScoutsBox
        activePlayer={activePlayer}
        set={setFormsTeam}
        forms={formsTeam}
      />
    </C.FlexContainer>
  );
};
