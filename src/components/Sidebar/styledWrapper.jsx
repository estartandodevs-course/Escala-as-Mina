import styled, { css } from "styled-components";

const Wrapper = styled.aside`
  ${(props) =>
    props.styling.variation === "right" &&
    css`
      position: absolute;
    `}
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.styling.backgroundColor};
  width: ${(props) => props.styling.width};
  height: 100vh;
  border-radius: ${(props) => props.styling.borderRadius};
  ${(props) => props.styling.variation}: 0;
  top: 0;
`;

export { Wrapper };
