import { useTheme } from 'styled-components';
import * as C from '../';
import { getV } from '../../styles';
import Switch from 'react-switch';
import { useEffect, useState } from 'react';

export const MatchScout = (props) => {
  const { forms, set } = props;
  const [noGoal, setNoGoal] = useState(true);
  const [victory, setVictory] = useState(true);
  const theme = useTheme();

  useEffect(() => {}, []);

  useEffect(() => {}, [noGoal, victory]);
  return (
    <C.FlexContainer
      direction="column"
      align="flex-start"
      justify="flex-start"
      backgroundColor={theme.pallete.primary.main}
      height="128px"
      width="296px"
      padding={`${getV('8px', 'h')} ${getV('24px', 'w')}`}
      border="30px"
      marginLeft
      marginBottom
    >
      <label>
        <C.Typography
          weight="700"
          size={getV('16px', 'h')}
          color={theme.pallete.secondary.lighter}
        >
          Partida com vitória
        </C.Typography>
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
      </label>

      <label>
        <C.Typography
          weight="700"
          size={getV('16px', 'h')}
          color={theme.pallete.secondary.lighter}
        >
          Jogo sem sofrer gol
        </C.Typography>
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
      </label>
    </C.FlexContainer>
  );
};
