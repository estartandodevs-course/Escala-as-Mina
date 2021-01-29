import { useTheme } from "styled-components";
import { StyledListItem, FlexContainer, PlayerInfo } from "./styledList";
import * as G from "../";
import { Button, InputPlayer } from "../";
import formatText from "./formatText";
import declineButton from "../../assets/icons/DeclineBtn.svg";
import acceptButton from "../../assets/icons/AcceptBtn.svg";
import deleteButton from "../../assets/icons/Deletar.svg";
import editButton from "../../assets/icons/Editar.svg";

const ListItem = (props) => {
  const {
    data,
    id,
    onClick,
    type = "ranking",
    variation = "default",
    dispatch = () => {},
    ...restProps
  } = props;
  const styles = { type, variation };
  const theme = useTheme();

  const listComponents = {
    player: {
      edit: (
        <FlexContainer key={id} type={type}>
          <StyledListItem type={type}>
            {formatText(data, styles, theme)}
            <Button type="icon" onClick={() => {}}>
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
      ),
      add: (
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
      ),
      show: (
        <G.FlexContainer type={type} onClick={dispatch} {...restProps}>
          <StyledListItem type={type}>
            {formatText(data, styles, theme)}
          </StyledListItem>
        </G.FlexContainer>
      ),
    },

    ranking: {
      default: (
        <FlexContainer type={type} padding="0 5% 0 0">
          <StyledListItem type={type}>
            {formatText(data, styles, theme)}
          </StyledListItem>
        </FlexContainer>
      ),
    },

    dashboard: {
      default: (
        <FlexContainer type={type} padding="0 5% 0 0">
          <StyledListItem type={type}>
            {formatText(data, styles, theme)}
          </StyledListItem>
        </FlexContainer>
      ),
    },
  };

  return listComponents[type][variation];
};

export { ListItem };
