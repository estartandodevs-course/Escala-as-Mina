import styled, { css } from "styled-components";
import { getV } from "../../styles";

export const StyledCard = styled.div.attrs((props) => ({
  width: props.theme.dimensions.card[props.size].width,
  height: props.theme.dimensions.card[props.size].height,
}))`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: ${getV("16px", "h")};
  width: ${(props) => getV(props.width, "w")};
  height: ${(props) => getV(props.height, "h")};

  grid-area: ${(props) => props.area || ""};

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
