import styled, { css } from "styled-components";
import { getV } from "../../styles";

const StyledCard = styled.div`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: ${(props) => (props.padding ? props.padding : getV("16px", "h"))};
  width: ${(props) => getV(props.width, "w")};
  height: ${(props) => getV(props.height, "h")};

  grid-area: ${(props) => props.area};
  background-color: ${(props) => props.backgroundColor};
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};

  ${(props) =>
    props.show === "dontShow" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: ${props.justify || "center"};
      align-items: ${props.align || "center"};
      flex-direction: ${props.direction || "row"};
    `};

  ${(props) =>
    props.size === "small" &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.size === "extraLarge" &&
    css`
      margin: auto;
      background-color: ${props.theme.pallete.gray.white};
      padding: ${getV("64px", "h")} ${getV("64px", "w")};
    `}
`;

export { StyledCard };
