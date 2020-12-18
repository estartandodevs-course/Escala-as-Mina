import * as C from "../../components";
import * as M from "../../mocks";
import { useTheme } from "styled-components";
import { getV } from "../../styles";
import { useState } from "react";
import * as S from "./styledPage";

export const Dashboard = (props) => {
  const { shownRound, setShownRound } = props;
  const theme = useTheme();
  const perPage = 7;
  const [page, setPage] = useState(0);

  const { currentRound } = M.getCurrentRound();
  const roundData = M.getMatchesOfRound(shownRound, page);
  const { data } = roundData;
  const allRoundsInfo = M.getAllRoundsInfo();
  const totalPages = handlePagination(data, perPage);
  const shownData = handleShownData(data, page, perPage);
  const [show, setShow] = useState(false);

  return (
    <S.GlobalWrapper>
      <C.Head title="dashboard" />
      <C.Modal
        show={show}
        setShow={setShow}
        allRoundsInfo={allRoundsInfo}
        currentRound={currentRound}
        setShownRound={setShownRound}
      />
      <S.Header>
        <C.Typography type="h1" align="left" color={theme.pallete.gray.black}>
          Dashboard
        </C.Typography>
        <C.Notification user={M.user} />
      </S.Header>
      <S.GridWrapper>
        <C.Card
          justify="flex-start"
          size="normal"
          direction="column"
          area="a"
          flex
        >
          <S.FlexContainer
            width="639px"
            marginBottom="32px"
            justify="space-between"
          >
            <C.Typography
              size="38px"
              weight="700"
              font="poppins"
              type="h2"
              align="left"
            >
              {shownRound}ª Rodada
            </C.Typography>
            <C.Button
              size="small"
              height="24px"
              width="40%"
              variation="active"
              color={theme.pallete.gray.white}
              onClick={() => setShow(true)}
            >
              <C.Typography
                size="12px"
                weight="800"
                font="Roboto"
                color={theme.pallete.gray.white}
                type="span"
              >
                Gerenciar Rodada
              </C.Typography>
            </C.Button>
          </S.FlexContainer>
          <ul>
            {shownData.map((item, index) => (
              <C.ListItem key={`partida-${index}`} type="dashboard">
                {item}
              </C.ListItem>
            ))}
          </ul>
          <C.FlexContainer justify="center" direction="column" height="100%">
            <C.Pagination
              totalPages={totalPages}
              page={page}
              setPage={setPage}
            />
          </C.FlexContainer>
        </C.Card>

        <C.Card flex direction="column" justify="flex-start" area="b">
          <C.Typography size={getV("24px", "w")} type="h2">
            Jogadoras Avaliadas
          </C.Typography>
          <S.FlexContainer direction="column" justify="center" height="100%">
            <C.Typography
              align="center"
              color={theme.pallete.alert.main}
              size="26px"
              weight="700"
              font="poppins"
            >
              {roundData.totalPlayers - roundData.missingPlayersAttributed}/
              {roundData.totalPlayers}
            </C.Typography>
            <C.Typography
              color={theme.pallete.alert.lighter}
              size="26px"
              weight="700"
              font="poppins"
              align="center"
            >
              {(
                ((roundData.totalPlayers - roundData.missingPlayersAttributed) /
                  roundData.totalPlayers) *
                100
              ).toFixed(1)}
              %
            </C.Typography>
          </S.FlexContainer>
        </C.Card>

        <C.Card flex direction="column" justify="flex-start" area="c">
          <C.Typography size="20px" weight="700" font="poppins" type="h2">
            Clubes com avaliações pendentes
          </C.Typography>
          <S.FlexContainer direction="column" justify="center" height="100%">
            <C.Typography
              size="20px"
              weight="700"
              font="poppins"
              align="center"
              color={theme.pallete.gray.firstGray}
            >
              {roundData.missingClubsAttributed} Clubes
            </C.Typography>
          </S.FlexContainer>
        </C.Card>
        <C.Card
          flex
          direction="column"
          justify="flex-start"
          area="d"
          height="100%"
        >
          <C.Typography size="1.5em" weight="700" font="poppins" type="h2">
            Melhor Jogadora da Rodada
          </C.Typography>
          <S.FlexContainer direction="column" justify="center" height="100%">
            <C.Typography
              color={theme.pallete.alert.main}
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
            >
              {roundData.bestAthlete.name}
            </C.Typography>
            <C.Typography
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
              gradient
            >
              {roundData.bestAthlete.score}
            </C.Typography>
            <C.Typography
              color={theme.pallete.gray.firstGray}
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
            >
              {roundData.bestAthlete.team}
            </C.Typography>
          </S.FlexContainer>
        </C.Card>
        <C.Card flex direction="column" justify="flex-start" area="e">
          <C.Typography size="1.5em" weight="700" font="poppins" type="h2">
            Time que mais pontuou na rodada
          </C.Typography>
          <S.FlexContainer direction="column" justify="center" height="100%">
            <C.Typography
              color={theme.pallete.alert.main}
              weight="700"
              size="1.5em"
              font="poppins"
              align="center"
            >
              {roundData.bestSquad.team}
            </C.Typography>
            <C.Typography
              weight="700"
              size="1.5em"
              font="poppins"
              align="center"
              gradient
            >
              {roundData.bestSquad.score}
            </C.Typography>
            <C.Typography
              color={theme.pallete.gray.firstGray}
              size="1.5em"
              weight="700"
              font="poppins"
              align="center"
            >
              {roundData.bestSquad.name}
            </C.Typography>
          </S.FlexContainer>
        </C.Card>
        <C.Card flex direction="column" justify="flex-start" area="f">
          <C.Typography size="20px" weight="700" font="poppins" type="h2">
            Usuários ativos nessa rodada
          </C.Typography>
          <S.FlexContainer direction="column" height="100%" justify="center">
            <C.Typography
              size="20px"
              weight="700"
              font="poppins"
              align="center"
              gradient
            >
              {(
                ((roundData.lastTotalSquads - roundData.totalSquads) /
                  roundData.totalSquads) *
                100
              ).toFixed(1)}
              %
            </C.Typography>
            <C.Typography
              color={theme.pallete.gray.firstGray}
              size="20px"
              weight="700"
              font="poppins"
              align="center"
            >
              {roundData.totalSquads} Usuários
            </C.Typography>
          </S.FlexContainer>
        </C.Card>
      </S.GridWrapper>
    </S.GlobalWrapper>
  );
};

function handleShownData(data, page, perPage, callback = handleJson) {
  const startIndex = page * perPage;
  const stopIndex = (page + 1) * perPage;
  const shownData = data.slice(startIndex, stopIndex);
  const modifiedData = callback(shownData);
  return modifiedData;
}
function handleJson(data) {
  const modifiedData = data.map((match) => {
    const homeTeam = match.find((team) => team.status === "home");
    const awayTeam = match.find((team) => team.status === "away");

    const percentageHomePlayers = `${(
      (homeTeam.playersAttributed / homeTeam.totalPlayers) *
      100
    ).toFixed()}%`;
    const percentageAwayPlayers = `${(
      (awayTeam.playersAttributed / awayTeam.totalPlayers) *
      100
    ).toFixed()}%`;

    const score = `${homeTeam.numberGoals} x ${awayTeam.numberGoals}`;

    return [
      percentageHomePlayers,
      homeTeam.teamName,
      score,
      awayTeam.teamName,
      percentageAwayPlayers,
    ];
  });
  return modifiedData;
}

function handlePagination(data, perPage) {
  const total = data.length;
  const totalPages = Math.ceil(total / perPage);

  return totalPages;
}
export { handlePagination, handleShownData };
