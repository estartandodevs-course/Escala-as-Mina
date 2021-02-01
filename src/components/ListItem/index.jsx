import { useTheme } from "styled-components";
import { StyledListItem, FlexContainer, PlayerInfo } from "./styledList";
import * as G from "../";
import { Button, InputPlayer } from "../";
import formatText from "./formatText";
import declineButton from "../../assets/icons/DeclineBtn.svg";
import acceptButton from "../../assets/icons/AcceptBtn.svg";
import deleteButton from "../../assets/icons/Deletar.svg";
import editButton from "../../assets/icons/Editar.svg";
import { useState } from "react";

const ListItem = ({
  data,
  id,
  type = "ranking",
  variation = "default",
  onClick,
  dispatch = () => {},
  customCloseInput,
  ...restProps
}) => {
  const styles = { type, variation };
  const theme = useTheme();

  const [numberInput, setNumberInput] = useState(data.number);
  const [nameInput, setNameInput] = useState(data.name);
  const [variationState, setVariationState] = useState(variation);

  const changeVariationTo = (variationKey) => {
    setVariationState(variationKey);
  };
  const handleChange = (setState) => (event) => {
    const textValue = event.target.value;
    setState(textValue);
  };
  const handleSubmit = () => {
    if (!numberInput && !nameInput) return;
    const payload = {
      name: nameInput,
      number: numberInput,
      show: true,
    };
    dispatch({ type: "addPlayer", payload });
  };

  const listComponents = {
    player: {
      edit: (
        <FlexContainer key={id} type={type}>
          <StyledListItem type={type}>
            {formatText(data, styles, theme)}
            <Button type="icon" onClick={() => changeVariationTo("add")}>
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
          <InputPlayer
            defaultValue={data.number}
            type="number"
            onChange={handleChange(setNumberInput)}
            value={numberInput}
          />
          <InputPlayer
            defaultValue={data.name}
            type="name"
            onChange={handleChange(setNameInput)}
            value={nameInput}
          />
          <Button type="icon" onClick={handleSubmit}>
            <img src={acceptButton} alt="Aceitar" />
          </Button>
          <Button
            type="icon"
            onClick={() => {
              console.log(customCloseInput);
              return customCloseInput
                ? customCloseInput()
                : changeVariationTo("edit");
            }}
          >
            <img src={declineButton} alt="Deletar" />
          </Button>
        </PlayerInfo>
      ),
      show: (
        <G.FlexContainer type={type} onClick={onClick} {...restProps}>
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

  return listComponents[type][variationState];
};

export { ListItem };
