import { StyledButton } from "./styledButton";
import { useTheme } from "styled-components";

export const Button = (props) => {
  const { onClick, size, variation, children } = props;

  const theme = useTheme();
  const variationStyle = {
    //this can't be outside Button because it depends on theme
    primary: {
      backgroundColor: theme.pallete.primary.main,
      hoverBackgroundColor: "red",
    },
    secondary: {
      backgroundColor: theme.pallete.secondary.main,
      hoverBackgroundColor: theme.pallete.secondary.lighter,
    },
    disabled: {
      backgroundColor: theme.pallete.gray.firstGray,
      hoverBackgroundColor: theme.pallete.gray.secondGray,
    },
    search: {
      backgroundColor: theme.pallete.gray.black,
      hoverBackgroundColor: theme.pallete.gray.firstGray,
    },
  };
  const styling = {
    ...theme.dimensions.button[size],
    ...variationStyle[variation],
  };

  if (props.active) {
    console.log(props);
  }
  return (
    <StyledButton onClick={onClick} styling={styling}>
      {children}
    </StyledButton>
  );
};
