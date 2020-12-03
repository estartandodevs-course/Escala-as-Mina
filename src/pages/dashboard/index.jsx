import { Card, ListItem, Typography, Button } from "../../components";
import { getItems } from "../../mocks";
import styled, { useTheme } from "styled-components";
import { getV } from "../../styles";
import { useState } from "react";

const Header = styled.header`
  max-height: 200px;
  height: ${getV("124px", "h")};
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-areas: "a a b" "a a c" "d e f";
  row-gap: ${getV("30px", "w")};
  column-gap: ${getV("30px", "h")};
  width: 100%;
`;
const GlobalWrapper = styled.div`
  width: 100%;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
function getButtons(page, totalPages) {
  //   <Button
  //   size={getV("32px", "h")}
  //   type="icon"
  //   variation="search"
  //   rounded
  // >
  //   <Typography color={theme.pallete.secondary.main}>1</Typography>
  // </Button>
  // <Button
  //   size={getV("32px", "h")}
  //   type="icon"
  //   variation="secondary"
  //   rounded
  // >
  //   <Typography color={theme.pallete.gray.black}>2</Typography>
  // </Button>
  // <Button
  //   size={getV("32px", "h")}
  //   type="icon"
  //   variation="search"
  //   rounded
  // >
  //   3
  // </Button>
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

export const Dashboard = (props) => {
  const theme = useTheme();
  const [page, setPage] = useState(1);

  let [totalPages, matches] = getItems(page);
  const matchesChecked = checkTeamsNameLenght(matches);

  console.log(page);

  return (
    <GlobalWrapper>
      <Header>
        <Typography
          color={theme.pallete.gray.thirdGray}
          size="44px"
          weight="bold"
          type="h1"
        >
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
              {page !== 0 ? <p>...</p> : ""}${getButtons(page, totalPages)}
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
        <Card area="b">test</Card>
        <Card area="c">vai cacete</Card>
        <Card area="d">eu acredito</Card>
        <Card area="e">só aparece</Card>
        <Card area="f">um do ladinho do outro</Card>
      </GridWrapper>
    </GlobalWrapper>
  );
};
