import { Wrapper } from "./styledWrapper";
import { useTheme } from "styled-components";


export const Sidebar = (props) => {
<<<<<<< HEAD
  const { variation = "left" } = props;
  const themeContext = useContext(ThemeContext);
=======
  const { variation = "left" } = props; //variation says which sidebar is
  const themeContext = useTheme();
>>>>>>> e3293633d679ccf08ff8dba8ef785c848597655c
  const stylingObject = {
    left: {
      variation: "left",
      borderRadius: "0 30px 30px 0",
<<<<<<< HEAD
      backgroundColor: `${themeContext.primaryColor}`,
      width: "clamp(260px, 18vw, 19vw)", //18% of 1440px ~ 264px,
=======
      backgroundColor: `${themeContext.pallete.gray.black}`,
      width: "18vw", //18% of 1440px ~ 264px,
>>>>>>> e3293633d679ccf08ff8dba8ef785c848597655c
    },
    right: {
      variation: "right",
      borderRadius: "30px 0 0 30px",
<<<<<<< HEAD
      backgroundColor: `${themeContext.tertiaryColor}`,
      width: "clamp(356px, 25vw, 26vw)", //25% of 1440px ~ 356px
    },
  };
=======
      backgroundColor: `${themeContext.pallete.primary.main}`,
      width: "25vw", //25% of 1440px ~ 356px
    },
  };

>>>>>>> e3293633d679ccf08ff8dba8ef785c848597655c
  const styling = stylingObject[variation];

  return <Wrapper styling={styling}>{props.children}</Wrapper>;
};
