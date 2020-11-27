import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  width: ${({ styling }) => styling.width};
  height: ${({ styling }) => styling.height};
  background-color: ${({ styling }) => styling.backgroundColor};
  outline: none;

  ${(props) =>
    props.active &&
    css`
      background-image: linear-gradient(270deg, #1be6d1 0%, #75f099 100%);
    `}
`;
// &:hover {
//   background-color: ${({ styling }) => styling.hoverBackgroundColor};
// }

export { StyledButton };
