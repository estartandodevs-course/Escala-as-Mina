import * as C from "..";
import { useTheme } from "styled-components";

export const ScoutsBox = (props) => {
  const { activePlayer, setActivePlayer, forms, setForms } = props;
  const { scouts } = activePlayer;
  const theme = useTheme();
  console.log(activePlayer);
  const indexPlayer = forms.players.findIndex(
    (item) => item.number === activePlayer.number
  );

  function setScout(index) {
    function set(scout) {
      const modifiedPlayer = { ...activePlayer };
      modifiedPlayer.scouts[index] = scout;
      setActivePlayer(modifiedPlayer);
    }
    return set;
  }
  const submit = () => {
    setForms((current) => {
      const temp = { ...current };
      temp.players[indexPlayer] = activePlayer;
      return temp;
    });
    setActivePlayer(false);
  };
  return (
    <C.FlexContainer
      direction="column"
      justify="flex-start"
      align="flex-start"
      border="30px"
      padding="24px 20px"
      width="296px"
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
        {scouts.map((scout, index) => {
          return (
            <C.FlexContainer key={index}>
              <C.Scout scout={scout} set={setScout(index)}></C.Scout>
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
