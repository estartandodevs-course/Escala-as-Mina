import styled, { css } from "styled-components";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

const RectangularButton = styled(BaseButton)`
  border-radius: 50px;

  width: ${({ styling }) => styling.width};
  height: ${({ styling }) => styling.height};

  &:focus {
    outline: none;
  }
  ${(props) =>
    props.type === "solid" //this ternary deals with solid/outlined types
      ? css`
          ${props.styling.variation === "active"
            ? "background-image"
            : "background-color"}: ${props.styling.background};
          &:hover {
            ${props.styling.variation === "active"
              ? "background-image"
              : "background-color"}: ${props.styling.hoverBackground};
          }
        `
      : css`
          background-color: transparent;
          border: 1px solid ${props.styling.background};
          &:hover {
            ${props.styling.variation === "alert"
              ? "background-image"
              : "background-color"}: ${props.styling.hoverBackground};
            color: ${(props) => props.theme.pallete.gray.black};
          }
        `};
`;

const IconButton = styled(BaseButton)`
  border-radius: 50%;
  width: ${(props) =>
    props.rounded ? props.styling.normal : props.styling.small};
  height: ${(props) =>
    props.rounded ? props.styling.normal : props.styling.small};

  ${(props) =>
    props.rounded === true
      ? css`
          background-image: ${props.styling.background};
        `
      : css`
          background-color: transparent;
        `}
`;
export { RectangularButton, IconButton };
