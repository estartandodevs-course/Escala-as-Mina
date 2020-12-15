import styled, { css } from "styled-components";
import "fontsource-raleway";
import "fontsource-poppins";
import "fontsource-roboto";

export const Title = styled.h1`
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.color || props.theme.pallete.gray.thirdGray};
  font-size: ${(props) => props.size || "2.75rem"};
  font-weight: 700;
  font-family: "Raleway";
  line-height: ${(props) => props.lineHeight};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginBottom};
  ${(props) =>
    props.textOverflow &&
    css`
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ${props.textOverflow};
    `};
`;

export const Subtitle = styled.h2`
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.color || props.theme.pallete.gray.thirdGray};
  font-size: ${(props) => props.size || "2.4rem"};
  font-weight: ${(props) => props.weight || "500"};
  font-family: ${(props) => props.font || "Raleway"};

  margin-bottom: ${(props) => props.marginBottom};
`;

export const Paragraph = styled.p`
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || props.theme.pallete.gray.white};
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || "400"};
  font-family: ${(props) => props.font || "Raleway"};
  ${(props) =>
    props.gradient &&
    css`
      color: transparent;
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
    `};
  text-overflow: ${(props) => props.textOverflow};
  text-transform: ${(props) => props.textTransform};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Span = styled.span`
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || props.theme.pallete.gray.white};
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || "400"};
  font-family: ${(props) => props.font || "Raleway"};
  ${(props) =>
    props.gradient &&
    css`
      color: transparent;
      background-image: ${props.theme.pallete.gradient.main};
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
    `};
  text-overflow: ${(props) => props.textOverflow};
`;
