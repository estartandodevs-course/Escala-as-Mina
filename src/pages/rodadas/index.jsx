import { useState, useEffect, useContext } from "react";
import { useTheme } from "styled-components";
import * as C from "../../components";
import * as M from "../../mocks";
import * as S from "./styledRounds";
import { scoutPosition } from "./dataSctructure";
import { getV } from "../../styles";
import { Img } from "../teams/styledPage";
import alert from "../../assets/icons/Alert.svg";
import { roundContext } from "../../context";

const selectedTeam = "flamengo";

export const Rodadas = () => {
  const theme = useTheme();
  const players = M.getPlayersOfTeam(selectedTeam);
  const round = useContext(roundContext);

  let positions = players.map((player) => player.position);
  positions = [...new Set(positions)];

  const [activePlayer, setActivePlayer] = useState(false);
  const [formsTeam, setFormsTeam] = useState({
    players: players.map((player) => {
      return {
        ...player,
        pointsAttributed: false,
        score: 0,
        scouts: scoutPosition[player.position],
      };
    }),
    teamScouts: [
      { key: "victory", state: true },
      { key: "noGoal", state: true },
    ],
  });

  const [alertMissingCaptain, setAlertMissingCaptain] = useState(true);
  const [alertMissingPlayers, setAlertMissingPlayers] = useState(
    isThereMissingAttributedPlayers(formsTeam)
  );

  useEffect(() => {
    setAlertMissingCaptain(!isThereCaptain(formsTeam));
    setAlertMissingPlayers(isThereMissingAttributedPlayers(formsTeam));
  }, [formsTeam]);

  return (
    <C.FlexContainer direction="column" justify="flex-start" height="100%">
      <C.FlexContainer justify="flex-start" align="flex-start" height="100%">
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
            Adicionar pontuação - {round}ª Rodada
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
                    key={(position, indexOuter)}
                    color={theme.pallete.gray.black}
                    size="30px"
                    weight="600"
                    textTransform="capitalize"
                    marginTop="18px"
                    marginBottom="8px"
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
                            cursor="pointer"
                            backgroundColor={
                              player.number === activePlayer.number &&
                              theme.pallete.primary.main
                            }
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
          {alertMissingCaptain && (
            <C.FlexContainer justify="flex-start" marginTop="1%">
              <Img src={alert} alt="alert" />
              <C.Typography
                size={getV("24px", "h")}
                color={theme.pallete.gray.thirdGray}
                weight="600"
              >
                Você deve escolher uma capitã.
              </C.Typography>
            </C.FlexContainer>
          )}
          {alertMissingPlayers && (
            <C.FlexContainer justify="flex-start" marginTop="1%">
              <Img src={alert} alt="alert" />
              <C.Typography
                size={getV("24px", "h")}
                color={theme.pallete.gray.thirdGray}
                weight="600"
              >
                Jogadoras com ponturação
                {` ${alertMissingPlayers[0]}/${alertMissingPlayers[1]}`}.
              </C.Typography>
            </C.FlexContainer>
          )}
        </C.FlexContainer>
        <S.FlexContainer
          direction="column"
          justify="flex-start"
          align="flex-end"
          width="auto"
          marginLeft="10px"
          height="100%"
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
      <C.FlexContainer justify="flex-end" marginTop="auto">
        <C.Button size="small" variation="disabled" marginRight="10px">
          <C.Typography
            size="14px"
            weight="700"
            color={theme.pallete.gray.black}
          >
            Voltar
          </C.Typography>
        </C.Button>
        <C.Button size="small" variation="active">
          <C.Typography
            size="14px"
            weight="700"
            color={theme.pallete.gray.black}
          >
            Continuar
          </C.Typography>
        </C.Button>
      </C.FlexContainer>
    </C.FlexContainer>
  );
};

function isThereCaptain({ players }) {
  const captainScout = players.map((player) => {
    const scout = player.scouts.find((scout) => scout.key === "isCaptain");
    return scout.state;
  });
  return captainScout.some((scout) => scout);
}

function isThereMissingAttributedPlayers({ players }) {
  const totalPlayers = players.length;
  const attributedPlayers = players.filter(
    (player) => player.pointsAttributed === true
  ).length;
  return totalPlayers === attributedPlayers
    ? false
    : [attributedPlayers, totalPlayers];
}
