import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";

const Wrapper = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.styling.backgroundColor};
  //   background-color: ${(props) => props.theme.primaryColor};
  width: ${(props) => props.styling.width};
  height: 100vh;
  border-radius: ${(props) => props.styling.borderRadius};
  ${(props) => props.styling.variation}: 0;
`;

export const Sidebar = (props) => {
  const themeContext = useContext(ThemeContext);
  const stylingObject = {
    left: {
      variation: "left",
      borderRadius: "0 30px 30px 0",
      backgroundColor: `${themeContext.primaryColor}`,
      width: "18vw", //18% of 1440px ~ 264px,
    },
    right: {
      variation: "right",
      borderRadius: "30px 0 0 30px",
      backgroundColor: `${themeContext.tertiaryColor}`,
      width: "25vw", //25% of 1440px ~ 356px
    },
  };
  const { variation = "left" } = props;
  const styling = stylingObject[variation];
  return <Wrapper styling={styling}>{props.children}</Wrapper>;
};
