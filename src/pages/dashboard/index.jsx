import { Card, ListItem, Typography, Button } from "../../components";
import { partidas } from "../../mocks";
import styled from "styled-components";
import { getV } from "../../styles";

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
`;
// We'll use this function if backend returns all items
// function divideList(sortedList, division, numberPerDivision = 8) {
//   const totalDivisions = Math.ceil(sortedList.lenght / numberPerDivision);
//   if (division > totalDivisions) division = totalDivisions;
//   const startIndex = numberPerDivision * division;
//   const stopIndex = numberPerDivision * (division + 1);
//   return sortedList.slice(startIndex, stopIndex);
// }
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

const partidasCheckadas = checkTeamsNameLenght(partidas);

console.log(partidasCheckadas);
export const Dashboard = (props) => {
  return (
    <GlobalWrapper>
      <Header>
        <Typography
          color={(props) => props.theme.pallete.gray.thirdGray}
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
            {partidasCheckadas.map((item) => (
              <ListItem type="dashboard">{item}</ListItem>
            ))}
            <FlexContainer>
              <p>-</p>
              <p>Primeira Página</p>
              <Button type="icon" variation="primary" rounded>
                1
              </Button>
              <p>Última Página</p>
              <p>-</p>
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
