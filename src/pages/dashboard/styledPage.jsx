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
  justify-content: ${(props) => props.justify || "space-evenly"};
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: ${(props) => props.marginLeft && "auto"};
  margin-right: ${(props) => props.marginRight && "auto"};
  flex-direction: ${(props) => props.direction || "row"};
`;
const GridColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
`;

export { FlexContainer, GlobalWrapper, GridWrapper, Header, GridColumnWrapper };
