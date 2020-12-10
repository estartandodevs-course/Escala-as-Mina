import * as C from "../";
import { useTheme } from "styled-components";

export const ScoutsViewer = (props) => {
  const { activePlayer, set, forms } = props;
  const theme = useTheme();
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
      {activePlayer["scouts"].map((scout, index) => {
        return (
          <C.FlexContainer key={index}>
            <C.Scout
              player={activePlayer.name}
              forms={forms}
              set={set}
              whatItem={scout.key}
            ></C.Scout>
          </C.FlexContainer>
        );
      })}
    </C.FlexContainer>
  );
};
