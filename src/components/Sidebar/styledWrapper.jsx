import { ThemeContext } from "styled-components";
import { useContext } from "react";
import styled from "styled-components";

export const Wrapper = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.styling.backgroundColor};
  width: ${(props) => props.styling.width};
  height: 100vh;
  border-radius: ${(props) => props.styling.borderRadius};
  ${(props) => props.styling.variation}: 0;
`;

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

export { stylingObject, Wrapper };
