import {
  Card,
  ListItem,
  Typography,
  Button,
  Modal,
  Notification,
  Head,
} from "../../components";
import * as M from "../../mocks";
import { useTheme } from "styled-components";
import { getV } from "../../styles";
import { useState, useEffect } from "react";
import * as S from "./styledPage";

export const Dashboard = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const currentRound = M.getCurrentRound();
  const [shownRound, setShownRound] = useState(currentRound);
  const [totalPages, matches] = M.getItems(page, shownRound);
  const [data, setData] = useState({
    missingMatches: 0,
    totalMatches: 0,
    bestAthlete: {
      best: {
        name: "",
        score: "",
        team: "",
      },
    },
    bestSquad: {
      best: {
        name: "",
        score: "",
        team: "",
      },
    },
    totalTeams: 2563,
    lastTotalTeams: 10025,
    allRoundsInfo: [],
    matchesChecked: [],
  });

  useEffect(() => {
    setData({
      missingMatches: M.getMissingMatches(shownRound),
      totalMatches: M.getTotalMatches(shownRound),
      bestAthlete: M.getAthlete(shownRound, "best"),
      bestSquad: M.getSquad(shownRound, "best"),
      totalTeams: M.getTotalSquads(shownRound),
      lastTotalTeams:
        shownRound === 1
          ? M.getTotalSquads(shownRound - 1)
          : M.getTotalSquads(shownRound),
      allRoundsInfo: M.getAllRoundsInfo(),
    });
  }, [shownRound]);

  const matchesChecked = checkTeamsNameLenght(matches);
  const isntFirstPage = page !== 0;
  const instLastPage = page !== totalPages;
  const theresPagesLeft = page - 1 > 1;
  const theresPagesRight = page + 1 < totalPages - 1;
  const [show, setShow] = useState(false);

  return (
    <S.GlobalWrapper>
      <Head title="dashboard" />
      <Modal
        show={show}
        setShow={setShow}
        roundsInfo={data.allRoundsInfo}
        currentRound={currentRound}
        setShownRound={setShownRound}
      />
      <S.Header>
        <Typography type="h1" align="left" color={theme.pallete.gray.black}>
          Dashboard
        </Typography>
        <Notification user={M.user} />
      </S.Header>
      <S.GridWrapper>
        <Card
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
            <Typography size="38px" weight="700" type="h2" align="left">
              {shownRound}ª Rodada
            </Typography>
            <Button
              size="small"
              height="24px"
              width="40%"
              variation="active"
              color={theme.pallete.gray.white}
              onClick={() => setShow(true)}
            >
              <Typography
                size="12px"
                weight="800"
                font="Roboto"
                color={theme.pallete.gray.white}
                type="span"
              >
                Gerenciar Rodada
              </Typography>
            </Button>
          </S.FlexContainer>
          <ul>
            {matchesChecked.map((item, index) => (
              <ListItem key={`partida-${index}`} type="dashboard">
                {item}
              </ListItem>
            ))}
          </ul>
          <S.GridColumnWrapper column="2fr 1fr 2fr">
            <>
              {isntFirstPage && (
                <S.FlexContainer>
                  <Button type="icon" onClick={() => setPage(page - 1)}>
                    {"<"}
                  </Button>
                  <Button type="icon" onClick={() => setPage(0)}>
                    Primeira Página
                  </Button>
                  {theresPagesLeft && <p>...</p>}
                </S.FlexContainer>
              )}

              {!isntFirstPage && !theresPagesLeft && <div></div>}
            </>

            <S.FlexContainer>
              {getButtons(page, totalPages, theme, setPage)}
            </S.FlexContainer>
            <S.FlexContainer>
              {theresPagesRight && <p>...</p>}
              {instLastPage && (
                <>
                  <Button type="icon" onClick={() => setPage(totalPages)}>
                    Última Página
                  </Button>
                  <Button type="icon" onClick={() => setPage(page + 1)}>
                    {">"}
                  </Button>
                </>
              )}
            </S.FlexContainer>
          </S.GridColumnWrapper>
        </Card>

        <Card flex direction="column" justify="flex-start" area="b">
          <Typography size={getV("24px", "w")} type="h2">
            Jogadoras Avaliadas
          </Typography>
          <S.FlexContainer direction="column">
            <Typography
              align="center"
              color={theme.pallete.alert.main}
              size="26px"
              weight="700"
              font="poppins"
            >
              {data.missingMatches}/{data.totalMatches}
            </Typography>
            <Typography
              color={theme.pallete.alert.lighter}
              size="26px"
              weight="700"
              font="poppins"
              align="center"
            >
              {((data.missingMatches / data.totalMatches) * 100).toFixed(1)}%
            </Typography>
          </S.FlexContainer>
        </Card>

        <Card flex direction="column" justify="flex-start" area="c">
          <Typography size="20px" weight="700" font="poppins" type="h2">
            Clubes com avaliações pendentes
          </Typography>
          <S.FlexContainer direction="column" justify="center" height="100%">
            <Typography
              size="20px"
              weight="700"
              font="poppins"
              align="center"
              color={theme.pallete.gray.firstGray}
            >
              {data.missingMatches * 2}
            </Typography>
          </S.FlexContainer>
        </Card>
        <Card
          flex
          direction="column"
          justify="flex-start"
          area="d"
          height="100%"
        >
          <Typography size="1.5em" weight="700" font="poppins" type="h2">
            Melhor Jogadora da Rodada
          </Typography>
          <S.FlexContainer direction="column" height="100%">
            <Typography
              color={theme.pallete.alert.main}
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
            >
              {data.bestAthlete.name}
            </Typography>
            <Typography
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
              gradient
            >
              {data.bestAthlete.score}
            </Typography>
            <Typography
              color={theme.pallete.gray.firstGray}
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
            >
              {data.bestAthlete.team}
            </Typography>
          </S.FlexContainer>
        </Card>
        <Card flex direction="column" justify="flex-start" area="e">
          <Typography size="1.5em" weight="700" font="poppins" type="h2">
            Time que mais pontuou na rodada
          </Typography>
          <S.FlexContainer direction="column">
            <Typography
              color={theme.pallete.alert.main}
              weight="700"
              size="1.5em"
              font="poppins"
              align="center"
            >
              {data.bestSquad.team}
            </Typography>
            <Typography
              weight="700"
              size="1.5em"
              font="poppins"
              align="center"
              gradient
            >
              {data.bestSquad.score}
            </Typography>
            <Typography
              color={theme.pallete.gray.firstGray}
              size="1.5em"
              weight="700"
              font="poppins"
              align="center"
            >
              {data.bestSquad.name}
            </Typography>
          </S.FlexContainer>
        </Card>
        <Card flex direction="column" justify="flex-start" area="f">
          <Typography size="20px" weight="700" font="poppins" type="h2">
            Usuários ativos nessa rodada
          </Typography>
          <S.FlexContainer direction="column" height="100%" justify="center">
            <Typography
              size="20px"
              weight="700"
              font="poppins"
              align="center"
              gradient
            >
              {(
                ((data.lastTotalTeams - data.totalTeams) / data.totalTeams) *
                100
              ).toFixed(1)}
              %
            </Typography>
            <Typography
              color={theme.pallete.gray.firstGray}
              size="20px"
              weight="700"
              font="poppins"
              align="center"
            >
              {data.totalTeams}
            </Typography>
          </S.FlexContainer>
        </Card>
      </S.GridWrapper>
    </S.GlobalWrapper>
  );
};

function range(start, stop) {
  return [...Array(stop - start).keys()].map((i) => i + start);
}
function getButtons(page, totalPages, theme, setPage) {
  const currentPage = page + 1;
  let start = 0;
  let stop = 0;
  if (page === 0) {
    start = 0;
    stop = 3;
  } else if (page === totalPages) {
    start = -2;
    stop = 1;
  } else {
    start = -1;
    stop = 2;
  }
  const constructorArray = range(start, stop);

  return constructorArray.map((item, index) => {
    return (
      <Button
        key={index}
        size={getV("32px", "h")}
        type="icon"
        variation={item === 0 ? "secondary" : "search"}
        rounded
        onClick={() => setPage(item + page)}
      >
        <Typography
          color={
            item === 0 ? theme.pallete.gray.black : theme.pallete.secondary.main
          }
        >
          {item + currentPage}
        </Typography>
      </Button>
    );
  });
}
function checkTeamsNameLenght(listOfTeams) {
  const checkTeamName = (listOfGame) => {
    return listOfGame.map((item) => {
      if (item.length > 15) {
        return item.slice(0, 18) + "...";
      } else {
        return item;
      }
    });
  };
  return listOfTeams.map((item) => checkTeamName(item));
}
