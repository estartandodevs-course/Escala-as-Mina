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
      scrollbar-color: ${(props) => props.theme.pallete.gray.firstGray}
        ${(props) => props.theme.pallete.primary.main};
      scrollbar-width: 8px;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.pallete.primary.main};
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
  flex-grow: ${(props) => props.flexGrow};

  min-width: ${(props) => props.minWidth};
  width: ${(props) => (props.width ? getV(props.width, "w") : "100%")};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  height: ${(props) => (props.height ? getV(props.height, "h") : "")};
  max-height: ${(props) => props.maxHeight};

  margin-left: ${(props) => props.marginLeft && "auto"};
  margin-right: ${(props) => props.marginRight && "auto"};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-bottom: ${(props) => props.marginBottomPx};

  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.border};
  cursor: ${(props) => props.cursor};
  ${(props) =>
    props.overflowY &&
    css`
      overflow-y: ${props.overflowY};
      scrollbar-color: ${(props) => props.theme.pallete.gray.firstGray}
        ${(props) => props.theme.pallete.primary.main};
      scrollbar-width: 8px;
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

  ${(props) =>
    props.type === "player" &&
    css`
      background-color: ${props.backgroundColor ||
      props.theme.pallete.gray.black};
      border-radius: 30px;
      box-sizing: border-box;
      margin-bottom: 8px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      padding: 5px 15px;
      border: 1px solid ${props.theme.pallete.secondary.main};
    `}
`;
export { Div, FlexContainer };
