import { useTheme } from "styled-components";
import * as C from "../";
import { getV } from "../../styles";
import Switch from "react-switch";
import { useEffect, useState } from "react";

export const MatchScout = (props) => {
  const { forms, set } = props;
  const theme = useTheme();

  const globalNoGoal = forms.teamScout.find((item) => item.key === "noGoal");
  const indexNoGoal = forms.teamScout.indexOf(globalNoGoal);
  const globalVictory = forms.teamScout.find((item) => item.key === "victory");
  const indexVictory = forms.teamScout.indexOf(globalVictory);

  const [noGoal, setNoGoal] = useState(globalNoGoal.state);
  const [victory, setVictory] = useState(globalVictory.state);

  useEffect(() => {
    set((forms) => {
      const temp = { ...forms };
      temp.teamScout[indexNoGoal].state = noGoal;
      temp.teamScout[indexVictory].state = victory;
      return temp;
    });
  }, [noGoal, victory, set, indexNoGoal, indexVictory]);

  useEffect(() => {}, [noGoal, victory]);
  return (
    <C.FlexContainer
      direction="column"
      align="flex-start"
      justify="flex-start"
      backgroundColor={theme.pallete.primary.main}
      height={getV("150px", "h")}
      width="296px"
      padding={`${getV("8px", "h")} ${getV("24px", "w")}`}
      border="30px"
      marginLeft
      marginBottomPx="16px"
    >
      <label>
        <C.Typography
          weight="700"
          size={getV("16px", "h")}
          color={theme.pallete.secondary.lighter}
        >
          Partida com vitória
        </C.Typography>
        <C.Div margin={`${getV("8px", "h")} 0 ${getV("8px", "h")} 0`}>
          <Switch
            uncheckedIcon={false}
            checkedIcon={false}
            width={64}
            height={24}
            handleDiameter={22}
            onColor={theme.pallete.secondary.lighter}
            onHandleColor={theme.pallete.secondary.main}
            offColor={theme.pallete.gray.secondGray}
            offHandleColor={theme.pallete.alert.main}
            onChange={(event) => setVictory(event)}
            checked={victory}
          />
        </C.Div>
      </label>

      <label>
        <C.Typography
          weight="700"
          size={getV("16px", "h")}
          color={theme.pallete.secondary.lighter}
        >
          Jogo sem sofrer gol
        </C.Typography>
        <C.Div margin={`${getV("8px", "h")} 0 ${getV("8px", "h")} 0`}>
          <Switch
            uncheckedIcon={false}
            checkedIcon={false}
            width={64}
            height={24}
            handleDiameter={22}
            onColor={theme.pallete.secondary.lighter}
            onHandleColor={theme.pallete.secondary.main}
            offColor={theme.pallete.gray.secondGray}
            offHandleColor={theme.pallete.alert.main}
            onChange={(event) => setNoGoal(event)}
            checked={noGoal}
          />
        </C.Div>
      </label>
    </C.FlexContainer>
  );
};
