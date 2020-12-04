import { Card, ListItem, Typography, Button } from "../../components";
import { getItems } from "../../mocks";
import { useTheme } from "styled-components";
import { getV } from "../../styles";
import { useState } from "react";
import {
  GlobalWrapper,
  Header,
  GridWrapper,
  FlexContainer,
} from "./styledPage";

export const Dashboard = (props) => {
  const theme = useTheme();
  const [page, setPage] = useState(0);

  let [totalPages, matches] = getItems(page);
  const matchesChecked = checkTeamsNameLenght(matches);
  return (
    <GlobalWrapper>
      <Header>
        <Typography type="h1" align="left">
          Dashboard
        </Typography>
      </Header>
      <GridWrapper>
        <Card size="normal" area="a">
          <ul>
            {matchesChecked.map((item, index) => (
              <ListItem key={("partida", index)} type="dashboard">
                {item}
              </ListItem>
            ))}
            <FlexContainer>
              {page !== 0 ? (
                <Button type="icon" onClick={() => setPage(page - 1)}>
                  {"<"}
                </Button>
              ) : (
                ""
              )}
              {page !== 0 ? (
                <Button type="icon" onClick={() => setPage(0)}>
                  Primeira Página
                </Button>
              ) : (
                ""
              )}
              {page !== 0 ? <p>...</p> : ""}
              {/* this gets all numbered buttons */}
              {getButtons(page, totalPages, theme, setPage)}
              {page !== totalPages ? <p>...</p> : ""}
              {page !== totalPages ? (
                <Button type="icon" onClick={() => setPage(totalPages)}>
                  Última Página
                </Button>
              ) : (
                ""
              )}
              {page !== totalPages ? (
                <Button type="icon" onClick={() => setPage(page + 1)}>
                  {">"}
                </Button>
              ) : (
                ""
              )}
            </FlexContainer>
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
        <Card area="c">vai cacete</Card>
        <Card area="d">eu acredito</Card>
        <Card area="e">só aparece</Card>
        <Card area="f">um do ladinho do outro</Card>
      </GridWrapper>
    </GlobalWrapper>
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
