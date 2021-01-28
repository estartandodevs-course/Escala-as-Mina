import { StyledListItem, FlexContainer, PlayerInfo } from "./styledList";
import * as G from "../";
import { useTheme } from "styled-components";
import { Button, InputPlayer, Typography } from "../";
import declineButton from "../../assets/icons/DeclineBtn.svg";
import acceptButton from "../../assets/icons/AcceptBtn.svg";
import deleteButton from "../../assets/icons/Deletar.svg";
import editButton from "../../assets/icons/Editar.svg";

//placeholder functions
function editItem() {
  console.log("aceito");
}
//id and set are props for type='player' and variation='edit'
const ListItem = (props) => {
  const {
    children,
    variation,
    set,
    id,
    onClick,
    type = "ranking",
    dispatch = () => {},
    ...restProps
  } = props;
  const theme = useTheme();

  if (type === "player" && variation === "edit") {
    return (
      <FlexContainer key={id} type={type}>
        <StyledListItem type={type}>
          {children.map((item, index) =>
            handleList(item, index, type, theme, id)
          )}
          <Button type="icon" onClick={editItem}>
            <img src={editButton} alt="edit" width="20px" height="24px" />
          </Button>
          <Button
            type="icon"
            onClick={() => {
              dispatch({ type: "deletePlayer", payload: id });
            }}
          >
            <img src={deleteButton} alt="delete" width="20px" height="24px" />
          </Button>
        </StyledListItem>
      </FlexContainer>
    );
  } else if (type === "player" && variation === "add") {
    return (
      <PlayerInfo>
        <InputPlayer type="number" />
        <InputPlayer type="name" />
        <Button type="icon">
          <img src={acceptButton} alt="Aceitar" />
        </Button>
        <Button type="icon">
          <img src={declineButton} alt="Deletar" />
        </Button>
      </PlayerInfo>
    );
  } else if (type === "player") {
    return (
      <G.FlexContainer type={type} onClick={onClick} {...restProps}>
        <StyledListItem type={type}>
          {children.map((item, index) =>
            handleList(item, index, type, theme, id)
          )}
        </StyledListItem>
      </G.FlexContainer>
    );
  }

  //this is the default return, ranking, dashboard or player (no variation)
  return (
    <FlexContainer type={type} padding="0 5% 0 0">
      <StyledListItem type={type}>
        {children.map((item, index) =>
          handleList(item, index, type, theme, id)
        )}
      </StyledListItem>
    </FlexContainer>
  );
};

function handleList(item, index, type, theme, id) {
  if (type === "dashboard") {
    return dashboard(item, index, theme, id);
  } else if (type === "player") {
    return player(item, index, theme, id);
  } else {
    return ranking(item, index, theme, id); //i'll have to revisit this
  }
}

function ranking(item, index, theme, id) {
  if (index === 0) {
    const elements = item.split("-");

    return (
      <span key={(id, index)}>
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
    const elements = item.split("/");
    const allPlayersChecked = elements[0] === elements[1];
    return (
      <Typography
        key={(id, index)}
        size="32px"
        weight="600"
        color={
          allPlayersChecked
            ? theme.pallete.secondary.main
            : theme.pallete.gray.firstGray
        }
      >
        {item}
      </Typography>
    );
  } else {
    return (
      <Typography
        key={(id, index)}
        size="32px"
        weight="600"
        font="Poppins"
        type="span"
        gradient
      >
        {item}
      </Typography>
    );
  }
}

function player(item, index, theme) {
  if (index === 1) {
    return (
      <Typography
        textTransform="uppercase"
        size="16px"
        weight="700"
        color={theme.pallete.secondary.main}
      >
        {item}
      </Typography>
    );
  } else if (index < 2) {
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
          key={index}
          size="1.2rem"
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
      return (
        <Typography key={index} size="1.2rem">
          {item}
        </Typography>
      );

    case 2:
      return (
        <Typography
          key={index}
          size="1.2rem"
          weight="700"
          align="center"
          color={theme.pallete.secondary.main}
          gradient
        >
          {item}
        </Typography>
      );

    case 3:
      return (
        <Typography key={index} size="1.2rem" align="right">
          {item}
        </Typography>
      );

    case 4:
      return (
        <Typography
          key={index}
          size="1.2rem"
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
      return <Typography key={index}>{item}</Typography>;
  }
}

export { ListItem };
