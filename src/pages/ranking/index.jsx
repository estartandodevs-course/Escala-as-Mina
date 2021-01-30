import styled, { useTheme } from "styled-components";
import { useState, useContext } from "react";
import * as C from "../../components";
import * as M from "../../mocks";
import { roundContext } from "../../context";
import { handlePagination } from "../dashboard";
import { totalAthletes } from "../../config/constants";

const StyledUl = styled.ul`
  width: 100%;
  margin-top: 32px;
`;

export const Ranking = () => {
  const [page, setPage] = useState(0);
  const round = useContext(roundContext);
  const theme = useTheme();
  const perPage = 8;

  const dataRanking = M.getRanking(round);
  const { data } = dataRanking;
  const totalPages = handlePagination(data, perPage);
  const ranking = handleJsonRanking(
    data.slice(perPage * page, perPage * (page + 1))
  );

  return (
    <>
      <C.FlexContainer
        direction="column"
        justify="flex-start"
        align="flex-start"
      >
        <C.Typography
          type="h1"
          align="left"
          color={theme.pallete.gray.black}
          textOverflow="ellipsis"
          size="38px"
          marginBottom="40px"
        >
          Ranking dos usuários - {round}ª Rodada
        </C.Typography>
        <C.InputSearch placeholder="Pesquise clubes pelo seu nome ou sigla" />
        <StyledUl>
          {ranking.map((item, index) => {
            return (
              <C.ListItem data={item} key={`partida-${index}`} type="ranking" />
            );
          })}
        </StyledUl>
        <C.FlexContainer marginTop="30px">
          <C.Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </C.FlexContainer>
      </C.FlexContainer>
    </>
  );
};

function handleJsonRanking(data) {
  const modifiedData = data.map((item) => {
    return {
      rank: `#${item.place}`,
      playerName: `- ${item.playerName} -`,
      squadName: `${item.squadName} - ${item.squadInitials}`,
      athleteAttributed: `${item.athleteAttributed}/${totalAthletes}`,
      points: `${item.points} pts`,
      allPlayersChecked: item.athleteAttributed === totalAthletes,
    };
  });
  return modifiedData;
}
