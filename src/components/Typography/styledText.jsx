import styled, { css } from "styled-components";

//this is a placeholder component
export const Paragraph = styled.p`
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || props.theme.pallete.gray.white};
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || "500"};
  font-family: ${(props) =>
    props.font || "Raleway"}; //this is broken. @Sarah, help

  ${(props) =>
    props.gradient &&
    css`
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-clip: text;
      text-fill-color: transparent;
    `}
`;

export const Span = styled.span`
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || props.theme.pallete.gray.white};
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || "500"};
  font-family: ${(props) =>
    props.font || "Raleway"}; //this is broken. @Sarah, help

  ${(props) =>
    props.gradient &&
    css`
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: trasparent;
    `}
`;
