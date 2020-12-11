import * as C from "..";
import { useTheme } from "styled-components";
import { useState } from "react";

export const ScoutsBox = (props) => {
  const { activePlayer, setActivePlayer, forms, setForms } = props;
  const theme = useTheme();
  const scouts = [...activePlayer.scouts];

  const [localScouts, setLocalScouts] = useState(...scouts);
  const indexPlayer = forms.players.indexOf(activePlayer);

  const submit = () => {
    setForms((current) => {
      const temp = { ...current };
      temp.players[indexPlayer].scouts = localScouts;
      return temp;
    });
  };
  return (
    <C.FlexContainer
      direction="column"
      justify="flex-start"
      align="flex-start"
      border="30px"
      padding="24px 20px"
      minWidth="296px"
      maxWidth="300px"
      height="626px"
      backgroundColor={theme.pallete.primary.main}
    >
      <C.Div Width>
        <C.Typography
          color={theme.pallete.gray.white}
          size="24px"
          weight="700"
          font="Poppins"
          align="center"
        >
          {activePlayer.name}
        </C.Typography>
      </C.Div>
      <C.Div>
        <C.Typography
          color={theme.pallete.gray.white}
          size="24px"
          weight="700"
          font="Poppins"
          align="center"
        >
          {activePlayer.score} pontos
        </C.Typography>
      </C.Div>
      <C.Div overflowY="scroll" height="60%" margin="0 0 3% 0">
        {activePlayer["scouts"].map((scout, index) => {
          return (
            <C.FlexContainer key={index}>
              <C.Scout
                scout={scout}
                set={setLocalScouts}
                index={index}
              ></C.Scout>
            </C.FlexContainer>
          );
        })}
      </C.Div>
      <C.FlexContainer justify="space-between" align="center">
        <C.Button
          type="solid"
          variation="disabled"
          size="small"
          onClick={() => setActivePlayer(false)}
        >
          <C.Typography size="16px" weight="500" font="Roboto" color="white">
            Cancelar
          </C.Typography>
        </C.Button>
        <C.Button
          type="solid"
          variation="active"
          size="small"
          border="1px solid white"
          onClick={submit}
        >
          <C.Typography size="16px" weight="500" font="Roboto" color="white">
            Confirmar
          </C.Typography>
        </C.Button>
      </C.FlexContainer>
    </C.FlexContainer>
  );
};
