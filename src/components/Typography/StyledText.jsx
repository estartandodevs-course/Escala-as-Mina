import styled, { css } from "styled-components";

export const Span = styled.span`
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || props.theme.pallete.gray.white};
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || "400"};
  font-family: ${(props) => props.font || "Raleway"};
  ${(props) =>
    props.gradient &&
    css`
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-repeat: repeat;
      text-fill-color: transparent;
    `}
`;
