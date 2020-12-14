import styled, { useTheme } from "styled-components";
import * as C from "../../components";
// import * as S from "../dashboard/styledPage";
const StyledUl = styled.ul`
  width: 100%;
  margin-top: 15px;
`;
const bla = [
  ["#1 - Rogerinho - 1 real de big big - RRB", "12/12", "45pts"],
  ["#1 - Rogerinho - 1 real de big big - RRB", "8/12", "45pts"],
  ["#1 - Rogerinho - 1 real de big big - RRB", "8/12", "45pts"],
  ["#1 - Rogerinho - 1 real de big big - RRB", "8/12", "45pts"],
  ["#1 - Rogerinho - 1 real de big big - RRB", "8/12", "45pts"],
  ["#1 - Rogerinho - 1 real de big big - RRB", "8/12", "45pts"],
  ["#1 - Rogerinho - 1 real de big big - RRB", "8/12", "45pts"],
  ["#1 - Rogerinho - 1 real de big big - RRB", "8/12", "45pts"],
];
export const Ranking = () => {
  const theme = useTheme();
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
          {bla.map((item, index) => (
            <C.ListItem key={`partida-${index}`} type="ranking">
              {item}
            </C.ListItem>
          ))}
        </StyledUl>
      </C.FlexContainer>
    </>
  );
};
