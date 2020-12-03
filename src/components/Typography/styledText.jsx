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
      color: transparent;
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      background-repeat: repeat;
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
      color: transparent;
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      background-repeat: repeat;
    `}
`;
