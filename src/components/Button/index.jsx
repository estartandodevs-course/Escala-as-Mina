import { StyledButton } from "./styledButton";

export const Button = (props) => {
  const {
    onClick = function () {
      console.log("foi");
    },
    // size,
    // variation,
    children,
  } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
