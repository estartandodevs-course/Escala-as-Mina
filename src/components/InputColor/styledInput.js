import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  position: absolute;
  inset: 0px;
  z-index: ${(prop) => (prop.isClicked ? 2 : -1)};
  width: 90px;
  height: 50px;
  cursor: pointer;
  border: none;

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
`;

export const GradientLabel = styled.label`
  position: relative;
  width: 90px;
  height: 50px;
  background-image: ${(props) => props.theme.pallete.gradient.main};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 0;
  ${(props) =>
    props.isClicked &&
    css`
      background-image: none;
    `}
`;
