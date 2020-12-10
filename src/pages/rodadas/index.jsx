import * as C from '../../components';
import { useState } from 'react';
import { scoutPosition } from './dataSctructure';
import { useTheme } from 'styled-components';
import * as M from '../../mocks';
import { Div } from './styledRounds';

export const Rodadas = () => {
  const theme = useTheme();

  const players = M.getPlayers();
  const [formsTeam, setFormsTeam] = useState({
    players: players.map((player) => {
      return { ...player, score: 0, scouts: scoutPosition[player.position] };
    }),
    teamScout: [
      { key: 'victory', state: true },
      { key: 'noGoal', state: true },
    ],
  });

  const activePlayer = formsTeam.players[0];
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
      <Div Width>
        <C.Typography
          color={theme.pallete.gray.white}
          size="24px"
          weight="700"
          font="Poppins"
          align="center"
        >
          {activePlayer.name}
        </C.Typography>
      </Div>
      <Div>
        <C.Typography
          color={theme.pallete.gray.white}
          size="24px"
          weight="700"
          font="Poppins"
          align="center"
        >
          {activePlayer.score} pontos
        </C.Typography>
      </Div>
      {activePlayer['scouts'].map((scout, index) => {
        return (
          <C.FlexContainer key={index}>
            <C.Scout
              player={activePlayer.name}
              forms={formsTeam}
              set={setFormsTeam}
              whatItem={scout.key}
            ></C.Scout>
          </C.FlexContainer>
        );
      })}
    </C.FlexContainer>
  );
};
