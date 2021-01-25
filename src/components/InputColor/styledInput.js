import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  width: 80px;
  height: 40px;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
export const Box = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: white;
  ${(props) =>
    props.color &&
    css`
      display: none;
    `}
`;

export const GradientLabel = styled.label`
  width: 90px;
  height: 50px;
  background-image: ${(props) => props.theme.pallete.gradient.main};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 0;
  ${(props) =>
    props.color &&
    css`
      background-image: none;
      background-color: ${props.color};
    `}
`;
