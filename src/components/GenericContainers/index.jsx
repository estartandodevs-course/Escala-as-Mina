import styled, { css } from "styled-components";
import { getV } from "../../styles";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft && "auto"};
  ${(props) =>
    props.overflowY &&
    css`
      overflow-y: ${props.overflowY};
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.pallete.gray.firstGray};
        border-radius: 30px;
      }
      &::-webkit-scrollbar-thumb {
        background-image: ${(props) => props.theme.pallete.gradient.main};
        border-radius: 30px;
      }
    `}
`;

const FlexContainer = styled.div`
  position: ${(props) => props.position};
  display: flex;
  justify-content: ${(props) => props.justify || "space-evenly"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};

  width: ${(props) => (props.width ? getV(props.width, "w") : "100%")};
  height: ${(props) => (props.height ? getV(props.height, "h") : "")};

  margin-left: ${(props) => props.marginLeft && "auto"};
  margin-right: ${(props) => props.marginRight && "auto"};
  margin-bottom: ${(props) => props.marginBottom};
  margin-bottom: ${(props) => props.marginBottomPx};

  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.border};
`;
export { Div, FlexContainer };
