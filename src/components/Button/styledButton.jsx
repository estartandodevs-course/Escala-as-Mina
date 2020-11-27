// import styled, { useTheme } from "styled-components";

// const theme = useTheme();
// const stylingObject = {
//   small: {
//     ...theme.dimensions.small,
//   },
// };

// export const StyledButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: ${({ styling }) => styling.width};
//   height: ${({ styling }) => styling.height};
//   background-color: ${({ styling }) => styling.backgroundColor};

//   ${({ active }) =>
//     active &&
//     `
//   backgrond-color: transparent;
//   background-image: ${props.theme.pallete.gradient.first}`}
//   }
// `;

import styled from "styled-components";
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 32px;
  background-color: blue;
  border: none;
  border-radius: 50px;

  &:focus {
    outline: none;
  }
`;
