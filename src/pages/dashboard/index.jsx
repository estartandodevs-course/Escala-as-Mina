import { Card, ListItem, Typography } from "../../components";
import { partidas } from "../../mocks";
import styled from "styled-components";
import { getV } from "../../styles";

const Header = styled.header`
  max-height: 200px;
  height: ${getV("124px", "h")};
`;
const GridWrapper = styled.div`
  grid-template-areas: "a a b" "a a c" "d e f";
  gap: 10px;
  width: 100%;
`;
const GlobalWrapper = styled.div`
  width: 100%;
`;
function divideList(sortedList, division, numberPerDivision = 8) {
  //   const totalDivisions = Math.ceil(sortedList.lenght / numberPerDivision);
  const stopIndex = numberPerDivision * (division + 1) - 1;
  const startIndex = numberPerDivision * division - 1;
  return sortedList.slice(startIndex, stopIndex);
}

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
            lista
            {/* {partidas.map((item) => {
              return <ListItem>{item}</ListItem>;
            })} */}
          </ul>
        </Card>
        <Card area="b">
          <Typography type="span">test</Typography>
        </Card>
        <Card area="c"></Card>
        <Card area="d"></Card>
        <Card area="e"></Card>
        <Card area="f"></Card>
      </GridWrapper>
    </GlobalWrapper>
  );
};
