import styled, { useTheme } from "styled-components";
import { useState, useContext } from "react";
import * as C from "../../components";
import * as M from "../../mocks";
import { roundContext } from "../../context";

const StyledUl = styled.ul`
  width: 100%;
  margin-top: 15px;
`;

export const Ranking = () => {
  const [page, setPage] = useState(0);
  const round = useContext(roundContext);
  const theme = useTheme();

  const dataRanking = M.getRanking(round, page);
  const ranking = { ...dataRanking, data: handleJson(dataRanking.data) };
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
          Ranking dos usuários - 10ª Rodada {/*AQUI VAI TER A RODADA*/}
        </C.Typography>
        <C.InputSearch placeholder="Pesquise clubes pelo seu nome ou sigla" />
        <StyledUl>
          {ranking.data.map((item, index) => (
            <C.ListItem key={`partida-${index}`} type="ranking">
              {item}
            </C.ListItem>
          ))}
        </StyledUl>
        <C.Pagination data={ranking} page={page} setPage={setPage} />
      </C.FlexContainer>
    </>
  );
};

function handleJson(data) {
  const modifiedData = data.map((item) => {
    return [
      `#${item.place} - ${item.playerName} - ${item.squadName} - ${item.squadInitials}`,
      `${item.athleteAttributed}/11`,
      `${item.points} pts`,
    ];
  });
  return modifiedData;
}
