import * as C from "../../components";
import { useState } from "react";
import { scoutPosition } from "./dataSctructure";
import { useTheme } from "styled-components";
import * as M from "../../mocks";

export const Rodadas = () => {
  const theme = useTheme();
  const players = M.getTeamPlayers("flamengo");
  let positions = players.map((player) => player.position);
  positions = [...new Set(positions)];

  const [formsTeam, setFormsTeam] = useState({
    players: players.map((player) => {
      return { ...player, score: 0, scouts: scoutPosition[player.position] };
    }),
    teamScout: [
      { key: "victory", state: true },
      { key: "noGoal", state: true },
    ],
  });
  const [activePlayer, setActivePlayer] = useState(false);
  return (
    <C.FlexContainer justify="flex-start" align="flex-start">
      <C.FlexContainer
        justify="flex-start"
        align="flex-start"
        direction="column"
        maxWidth="727px"
        maxHeight="100%"
      >
        <C.Typography
          type="h1"
          align="left"
          color={theme.pallete.gray.black}
          textOverflow="ellipsis"
          size="38px"
          lineHeight="20px"
          padding="13px 0"
        >
          Adicionar pontuação - 10ª Rodada {/*AQUI VAI TER A RODADA*/}
        </C.Typography>
        <C.Typography
          type="h1"
          align="left"
          color={theme.pallete.gray.firstGray}
          textOverflow="ellipsis"
          size="38px"
          padding="13px 0"
        >
          Flamengo {/*AQUI VAI TER O NOME DO TIME"*/}
        </C.Typography>
        <C.FlexContainer
          overflowY="scroll"
          direction="column"
          justify="flex-start"
          align="flex-start"
        >
          {positions.map((position, indexOuter) => {
            return players
              .filter((player) => player.position === position)
              .sort((a, b) => {
                return a.number > b.number;
              })
              .map((player, indexInner) => {
                return (
                  <>
                    {indexInner === 0 && (
                      <C.Typography
                        key={indexOuter}
                        color={theme.pallete.gray.black}
                        size="30px"
                        weight="600"
                        textTransform="capitalize"
                      >
                        {position}
                      </C.Typography>
                    )}
                    <C.ListItem type="player" key={(position, indexInner)}>
                      <>{player.number}</>
                      <>{player.position.slice(0, 3)}</>
                      <>{player.name}</>
                    </C.ListItem>
                  </>
                );
              });
          })}
        </C.FlexContainer>
      </C.FlexContainer>
      <C.FlexContainer direction="column" justify="flex-start" align="flex-end">
        <C.Head title="rodadas" />
        <C.MatchScout forms={formsTeam} set={setFormsTeam} />
        <C.Button
          size="small"
          onClick={() => setActivePlayer(formsTeam.players[0])}
        >
          click me
        </C.Button>
        {activePlayer && (
          <C.ScoutsBox
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            forms={formsTeam}
            setForms={setFormsTeam}
          />
        )}
      </C.FlexContainer>
    </C.FlexContainer>
  );
};
