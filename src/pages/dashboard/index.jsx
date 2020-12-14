import * as C from "../../components";
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
  const [totalPages, matches] = M.getMatches(page, shownRound);
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

  const isntFirstPage = page !== 0;
  const instLastPage = page !== totalPages;
  const theresPagesLeft = page - 1 > 1;
  const theresPagesRight = page + 1 < totalPages - 1;
  const [show, setShow] = useState(false);

  return (
    <S.GlobalWrapper>
      <C.Head title="dashboard" />
      <C.Modal
        show={show}
        setShow={setShow}
        roundsInfo={data.allRoundsInfo}
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
            <C.Typography size="38px" weight="700" type="h2" align="left">
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
            {matches.map((item, index) => (
              <C.ListItem key={`partida-${index}`} type="dashboard">
                {item}
              </C.ListItem>
            ))}
          </ul>
          <S.GridColumnWrapper column="2fr 1fr 2fr">
            <>
              {/* <> what if there's less elements than 3 pages worth? */}
              {isntFirstPage && (
                <S.FlexContainer>
                  <C.Button type="icon" onClick={() => setPage(page - 1)}>
                    {"<"}
                  </C.Button>
                  <C.Button type="icon" onClick={() => setPage(0)}>
                    Primeira Página
                  </C.Button>
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
                  <C.Button type="icon" onClick={() => setPage(totalPages)}>
                    Última Página
                  </C.Button>
                  <C.Button type="icon" onClick={() => setPage(page + 1)}>
                    {">"}
                  </C.Button>
                </>
              )}
            </S.FlexContainer>
          </S.GridColumnWrapper>
        </C.Card>

        <C.Card flex direction="column" justify="flex-start" area="b">
          <C.Typography size={getV("24px", "w")} type="h2">
            Jogadoras Avaliadas
          </C.Typography>
          <S.FlexContainer direction="column">
            <C.Typography
              align="center"
              color={theme.pallete.alert.main}
              size="26px"
              weight="700"
              font="poppins"
            >
              {data.missingMatches}/{data.totalMatches}
            </C.Typography>
            <C.Typography
              color={theme.pallete.alert.lighter}
              size="26px"
              weight="700"
              font="poppins"
              align="center"
            >
              {((data.missingMatches / data.totalMatches) * 100).toFixed(1)}%
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
              {data.missingMatches * 2}
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
          <S.FlexContainer direction="column" height="100%">
            <C.Typography
              color={theme.pallete.alert.main}
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
            >
              {data.bestAthlete.name}
            </C.Typography>
            <C.Typography
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
              gradient
            >
              {data.bestAthlete.score}
            </C.Typography>
            <C.Typography
              color={theme.pallete.gray.firstGray}
              weight="700"
              size="1.5em"
              align="center"
              font="poppins"
            >
              {data.bestAthlete.team}
            </C.Typography>
          </S.FlexContainer>
        </C.Card>
        <C.Card flex direction="column" justify="flex-start" area="e">
          <C.Typography size="1.5em" weight="700" font="poppins" type="h2">
            Time que mais pontuou na rodada
          </C.Typography>
          <S.FlexContainer direction="column">
            <C.Typography
              color={theme.pallete.alert.main}
              weight="700"
              size="1.5em"
              font="poppins"
              align="center"
            >
              {data.bestSquad.team}
            </C.Typography>
            <C.Typography
              weight="700"
              size="1.5em"
              font="poppins"
              align="center"
              gradient
            >
              {data.bestSquad.score}
            </C.Typography>
            <C.Typography
              color={theme.pallete.gray.firstGray}
              size="1.5em"
              weight="700"
              font="poppins"
              align="center"
            >
              {data.bestSquad.name}
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
                ((data.lastTotalTeams - data.totalTeams) / data.totalTeams) *
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
              {data.totalTeams}
            </C.Typography>
          </S.FlexContainer>
        </C.Card>
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
      <C.Button
        key={index}
        size={getV("32px", "h")}
        type="icon"
        variation={item === 0 ? "secondary" : "search"}
        rounded
        onClick={() => setPage(item + page)}
      >
        <C.Typography
          color={
            item === 0 ? theme.pallete.gray.black : theme.pallete.secondary.main
          }
        >
          {item + currentPage}
        </C.Typography>
      </C.Button>
    );
  });
}
