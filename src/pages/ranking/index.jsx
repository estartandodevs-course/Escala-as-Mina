import styled, { useTheme } from "styled-components";
import { useState, useContext } from "react";
import * as C from "../../components";
import * as M from "../../mocks";
import { roundContext } from "../../context";
import { handlePagination, handleShownData } from "../dashboard";

const StyledUl = styled.ul`
  width: 100%;
  margin-top: 15px;
`;

export const Ranking = () => {
  const [page, setPage] = useState(0);
  const round = useContext(roundContext);
  const theme = useTheme();
  const perPage = 8;

  const dataRanking = M.getRanking(round);
  const { data } = dataRanking;
  const totalPages = handlePagination(data, perPage);
  const ranking = handleShownData(data, page, perPage, handleJsonRanking);

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
          marginBottom="20px"
        >
          Ranking dos usuários - {round}ª Rodada
        </C.Typography>
        <C.InputSearch placeholder="Pesquise clubes pelo seu nome ou sigla" />
        <StyledUl>
          {ranking.map((item, index) => (
            <C.ListItem key={`partida-${index}`} type="ranking">
              {item}
            </C.ListItem>
          ))}
        </StyledUl>
        <C.Pagination totalPages={totalPages} page={page} setPage={setPage} />
      </C.FlexContainer>
    </>
  );
};

function handleJsonRanking(data) {
  const modifiedData = data.map((item) => {
    return [
      `#${item.place} - ${item.playerName} - ${item.squadName} - ${item.squadInitials}`,
      `${item.athleteAttributed}/11`,
      `${item.points} pts`,
    ];
  });
  return modifiedData;
}
