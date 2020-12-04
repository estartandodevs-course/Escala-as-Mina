import { Card, ListItem, Typography, Button } from "../../components";
import { getItems } from "../../mocks";
import { useTheme } from "styled-components";
import { getV } from "../../styles";
import { useState } from "react";
import * as S from "./styledPage";

export const Dashboard = (props) => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const rodada = "10";

  const [totalPages, matches] = getItems(page);
  const matchesChecked = checkTeamsNameLenght(matches);
  const isntFirstPage = page !== 0;
  const instLastPage = page !== totalPages;
  const theresPagesLeft = page - 1 > 1;
  const theresPagesRight = page + 1 < totalPages - 1;

  return (
    <S.GlobalWrapper>
      <S.Header>
        <Typography type="h1" align="left">
          Dashboard
        </Typography>
      </S.Header>
      <S.GridWrapper>
        <Card size="normal" area="a">
          <S.FlexContainer justify="space-between">
            <Typography type="h2" align="left">
              {rodada}ª Rodada
            </Typography>
            <Button
              size="small"
              variation="active"
              color={theme.pallete.gray.white}
            >
              Gerenciar Rodada
            </Button>
          </S.FlexContainer>
          <ul>
            {matchesChecked.map((item, index) => (
              <ListItem key={("partida", index)} type="dashboard">
                {item}
              </ListItem>
            ))}
            <S.FlexContainer marginLeft marginRight>
              <>
                {isntFirstPage && (
                  <>
                    <Button type="icon" onClick={() => setPage(page - 1)}>
                      {"<"}
                    </Button>
                    <Button type="icon" onClick={() => setPage(0)}>
                      Primeira Página
                    </Button>
                  </>
                )}
                {theresPagesLeft && <p>...</p>}
              </>
              {/* this gets all numbered buttons */}
              {getButtons(page, totalPages, theme, setPage)}
              <>
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
              </>
            </S.FlexContainer>
          </ul>
        </Card>
        <Card area="b">
          <Typography size={getV("24px", "w")} type="h2">
            Jogadoras Avaliadas
          </Typography>
          <Typography
            align="center"
            color={theme.pallete.alert.main}
            size="32px"
          >
            22/32
          </Typography>
          <Typography
            color={theme.pallete.alert.lighter}
            size={getV("32px", "w")}
            align="center"
          >
            10%
          </Typography>
        </Card>
        <Card area="c">
          <Typography size={getV("24px", "w")} type="h2">
            Clubes com avaliações pendentes
          </Typography>
        </Card>
        <Card area="d">
          <Typography size={getV("24px", "w")} type="h2">
            Melhor Jogadora da Rodada
          </Typography>
        </Card>
        <Card area="e">
          <Typography size={getV("24px", "w")} type="h2">
            Time que mais pontuou na rodada
          </Typography>
        </Card>
        <Card area="f">
          <Typography size={getV("24px", "w")} type="h2">
            Usuários ativos nessa rodada
          </Typography>
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

  return constructorArray.map((item) => {
    return (
      <Button
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
