import { StyledListItem, FlexContainer } from "./styledList";
import { useTheme } from "styled-components";
import { Button, InputPlayer, Typography } from "../";
import declineButton from "../../assets/icons/DeclineBtn.svg";
import acceptButton from "../../assets/icons/AcceptBtn.svg";

//placeholder functions
function accept() {
  console.log("aceito");
}
function decline() {
  console.log("recusado");
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
  } else if (type === "player" && variation === "add") {
    //ideally we redo this input so we call input 2 times here
    return <InputPlayer />;
  }

  //this is the default return
  return (
    <FlexContainer type={type}>
      <StyledListItem type={type}>
        {children.map((item, index) => handleList(item, index, type, theme))}
      </StyledListItem>
    </FlexContainer>
  );
};

function handleList(item, index, type, theme) {
  if (type === "dashboard") {
    return dashboard(item, index, theme);
  } else if (type === "player") {
    return player(item, index, theme);
  } else {
    return ranking(item, index, theme);
  }
}

function ranking(item, index, theme) {
  if (index === 0) {
    const elements = item.split("-");

    return (
      <span>
        <Typography
          size="24px"
          weight="700"
          color={theme.pallete.secondary.main}
          type="span"
        >
          {elements[0]}
        </Typography>
        <Typography
          size="24px"
          weight="700"
          color={theme.pallete.gray.firstGray}
          type="span"
        >
          - {elements[1]} -
        </Typography>
        <Typography
          size="24px"
          weight="700"
          color={theme.pallete.secondary.main}
          type="span"
        >
          {elements[2]} - {elements[3]}
        </Typography>
      </span>
    );
  } else if (index === 1) {
    return (
      <Typography size="32px" weight="600" color={theme.pallete.gray.firstGray}>
        {item}
      </Typography>
    );
  } else {
    return (
      <Typography size="32px" weight="600" font="Poppins" type="span" gradient>
        {item}
      </Typography>
    );
  }
}

function player(item, index, theme) {
  if (index < 2) {
    return (
      <Typography size="16px" weight="700" color={theme.pallete.secondary.main}>
        {item}
      </Typography>
    );
  } else {
    return (
      <Typography size="16px" weight="700" color={theme.pallete.gray.white}>
        {item}
      </Typography>
    );
  }
}

function dashboard(item, index, theme) {
  switch (index) {
    case 0:
      return (
        <Typography
          size="16px"
          weight="700"
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
      return <Typography size="16px">{item}</Typography>;

    case 2:
      return (
        <Typography
          size="16px"
          weight="700"
          align="center"
          color={theme.pallete.secondary.main}
        >
          {item}
        </Typography>
      );

    case 3:
      return (
        <Typography size="16px" align="right">
          {item}
        </Typography>
      );

    case 4:
      return (
        <Typography
          size="16px"
          weight="700"
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

export { ListItem };
