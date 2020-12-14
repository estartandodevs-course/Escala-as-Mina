import * as C from "../";
import { useTheme } from "styled-components";

const criteria = {
  wasPlaying: 0,
  numberGoal: 7,
  assistanceGoal: 3,
  ownGoal: -5,
  missedPenalty: -5,
  hasYellowCard: -2,
  hasRedCard: -5,
  defendedPenalty: 5,
  concededGoal: -4,
};

export const ScoutsBox = (props) => {
  const { activePlayer, setActivePlayer, setForms, forms } = props;
  const { scouts } = activePlayer;
  const { teamScouts } = forms;
  const theme = useTheme();

  const setScout = (key) => {
    function set(newScout, attributed = true) {
      const tempPlayer = {
        ...activePlayer,
        scouts: activePlayer.scouts.map((_scout) =>
          _scout.key === key ? newScout : _scout
        ),
        pointsAttributed: attributed,
      };
      const modifiedPlayer = {
        ...tempPlayer,
        score: calcScore(tempPlayer, teamScouts),
      };
      setActivePlayer(modifiedPlayer);
    }
    return set;
  };
  console.log(activePlayer);

  const submit = () => {
    const modifiedPlayer = { ...activePlayer, pointsAttributed: true };
    setForms((current) => {
      const modifiedForms = {
        ...current,
        players: current.players.map((player) =>
          player.number === modifiedPlayer.number ? modifiedPlayer : player
        ),
      };
      return modifiedForms;
    });
    setActivePlayer(false);
  };
  return (
    <C.FlexContainer
      direction="column"
      justify="flex-start"
      align="flex-start"
      border="30px"
      padding="16px 8px 16px 8px"
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
      <C.Div overflowY="scroll" height="70%" padding="0 3% 0  0">
        {scouts.map((scout, index) => {
          return (
            <C.FlexContainer key={index}>
              <C.Scout scout={scout} set={setScout(scout.key)}></C.Scout>
            </C.FlexContainer>
          );
        })}
      </C.Div>
      <C.FlexContainer justify="space-between" align="center" marginTop="auto">
        <C.Button
          type="solid"
          variation="disabled"
          size="small"
          width="45%"
          onClick={() => setActivePlayer(false)}
        >
          <C.Typography size="16px" weight="500" font="Roboto" color="white">
            Cancelar
          </C.Typography>
        </C.Button>
        <C.Button
          type="solid"
          width="45%"
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

function calcScore(player, teamScouts) {
  const { scouts, position } = player;
  const wasPlaying = scouts.find((scout) => scout.key === "wasPlaying").state;
  const isCaptain = scouts.find((scout) => scout.key === "isCaptain").state;
  const victory = teamScouts.find((scout) => scout.key === "victory").state;
  const noGoal = teamScouts.find((scout) => scout.key === "noGoal").state;

  const pointsScouts = scouts.filter(
    (scout) => !["wasPlaying", "isCaptain"].includes(scout.key)
  );
  const scores = pointsScouts.map(({ key, value, state }) => {
    let score = 0;
    if (value) {
      score = criteria[key] * value;
    } else {
      score = state ? criteria[key] : 0;
    }
    return score;
  });
  let score = scores.reduce((acc, cur) => acc + cur);
  if (position === "atacante") {
    score = victory ? score + 4 : score;
  } else if (["zagueira", "goleira", "lateral"].includes(position)) {
    score = noGoal ? score + 5 : score;
  }

  if (isCaptain) {
    score = score * 2;
  }
  return wasPlaying ? score : 0;
}
