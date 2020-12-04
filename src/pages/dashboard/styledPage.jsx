import styled from "styled-components";
import { getV } from "../../styles";

export const Header = styled.header`
  max-height: 200px;
  height: ${getV("124px", "h")};
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-areas: "a a b" "a a c" "d e f";
  row-gap: ${getV("30px", "w")};
  column-gap: ${getV("30px", "h")};
  width: 100%;
`;
export const GlobalWrapper = styled.div`
  width: 100%;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
