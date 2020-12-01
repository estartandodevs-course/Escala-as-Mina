import { StyledListItem, FlexContainer } from "./styledList";
import styled, { useTheme } from "styled-components";
import { Button } from "../";
import declineButton from "../../assets/icons/DeclineBtn.svg";
import acceptButton from "../../assets/icons/AcceptBtn.svg";

const Typography = styled.p`
  font-size: 16px;
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || props.theme.pallete.gray.white};
`;

function dashboard(item, index, theme) {
  switch (index) {
    case 0:
      return (
        <Typography
          color={
            Number(item.replace("%", "")) > 50
              ? theme.pallete.secondary.main
              : theme.pallete.alert.main
          }
        >
          {item}
        </Typography>
      );

    case 1:
      return <Typography>{item}</Typography>;

    case 2:
      return (
        <Typography align="center" color={theme.pallete.secondary.main}>
          {item}
        </Typography>
      );

    case 3:
      return <Typography align="right">{item}</Typography>;

    case 4:
      return (
        <Typography
          color={
            Number(item.replace("%", "")) > 50
              ? theme.pallete.secondary.main
              : theme.pallete.alert.main
          }
          align="right"
        >
          {item}
        </Typography>
      );

    default:
      return <Typography>{item}</Typography>;
  }
}
function accept() {
  console.log("aceito");
}
function decline() {
  console.log("recusado");
}
function player(item, index, theme) {
  if (index < 2) {
    return <Typography color={theme.pallete.secondary.main}>{item}</Typography>;
  } else {
    return <Typography color={theme.pallete.gray.white}>{item}</Typography>;
  }
}

function handleList(item, index, type, theme) {
  if (type === "dashboard") {
    return dashboard(item, index, theme);
  } else if (type === "player") {
    return player(item, index, theme);
  } else {
    return <Typography>{item}</Typography>;
  }
}

const ListItem = (props) => {
  const { children, variation, type = "ranking" } = props;
  const theme = useTheme();

  if (type === "player" && variation === "edit") {
    return (
      <FlexContainer type={type}>
        <StyledListItem type={type}>
          {children.map((item, index) => handleList(item, index, type, theme))}
          <Button type="icon" onClick={accept}>
            <img src={acceptButton} alt="accept" />
          </Button>
          <Button type="icon" onClick={decline}>
            <img src={declineButton} alt="decline" />
          </Button>
        </StyledListItem>
      </FlexContainer>
    );
  }
  // else if (type ==="player" && variation ==="add") {

  // }

  return (
    <FlexContainer type={type}>
      <StyledListItem type={type}>
        {children.map((item, index) => handleList(item, index, type, theme))}
      </StyledListItem>
    </FlexContainer>
  );
};

export { ListItem };
