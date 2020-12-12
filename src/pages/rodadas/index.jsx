import * as C from "../../components";
import { useState } from "react";
import { scoutPosition } from "./dataSctructure";
import { useTheme } from "styled-components";
import * as M from "../../mocks";
import * as S from "./styledRounds";

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
  console.log(formsTeam, "rodadas");

  return (
    <C.FlexContainer justify="flex-start" align="flex-start">
      <C.Head title="rodadas" />
      <C.FlexContainer
        justify="flex-start"
        align="flex-start"
        direction="column"
        maxWidth="727px"
        height="100%"
        flexGrow="1"
      >
        <C.Typography
          type="h1"
          align="left"
          color={theme.pallete.gray.black}
          textOverflow="ellipsis"
          size="38px"
        >
          Adicionar pontuação - 10ª Rodada {/*AQUI VAI TER A RODADA*/}
        </C.Typography>
        <C.Typography
          type="h1"
          align="left"
          color={theme.pallete.gray.firstGray}
          textOverflow="ellipsis"
          size="38px"
        >
          Flamengo {/*AQUI VAI TER O NOME DO TIME"*/}
        </C.Typography>
        <C.FlexContainer
          overflowY="scroll"
          direction="column"
          justify="flex-start"
          align="flex-start"
          maxHeight="70%"
          padding="0 5% 0 0 "
        >
          {positions.map((position, indexOuter) => {
            return (
              <>
                <C.Typography
                  key={indexOuter}
                  color={theme.pallete.gray.black}
                  size="30px"
                  weight="600"
                  textTransform="capitalize"
                  marginTop="32px"
                  marginBottom="16px"
                >
                  {position}
                </C.Typography>
                {formsTeam.players
                  .filter((player) => player.position === position)
                  .sort((a, b) => {
                    return a.number > b.number;
                  })
                  .map((player, indexInner) => {
                    return (
                      <>
                        <C.ListItem
                          type="player"
                          key={(position, indexInner)}
                          onClick={() => {
                            setActivePlayer(player);
                          }}
                        >
                          <>{player.number}</>
                          <>{player.position.slice(0, 3)}</>
                          <>{player.name}</>
                        </C.ListItem>
                      </>
                    );
                  })}
              </>
            );
          })}
        </C.FlexContainer>
      </C.FlexContainer>
      <S.FlexContainer
        direction="column"
        justify="flex-start"
        align="flex-end"
        width="auto"
        marginLeft="10px"
      >
        <C.MatchScout forms={formsTeam} set={setFormsTeam} />
        {activePlayer && (
          <C.ScoutsBox
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            forms={formsTeam}
            setForms={setFormsTeam}
          />
        )}
      </S.FlexContainer>
    </C.FlexContainer>
  );
};
