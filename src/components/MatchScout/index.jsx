import { useTheme } from 'styled-components';
import * as C from '../';
import { getV } from '../../styles';
import { useTheme } from 'styled-components';

const MatchScout = (props) => {
  const theme = useTheme();

  return (
    <C.FlexContainer direction="column" marginBottom marginLeft>
      <C.Typography
        weight="700"
        size={getV('16px', 'h')}
        color={theme.pallete.secondary.lighter}
      >
        Partida com vitória
      </C.Typography>
      <C.Typography
        weight="700"
        size={getV('16px', 'h')}
        color={theme.pallete.secondary.lighter}
      >
        Jogo sem sofrer gol
      </C.Typography>
    </C.FlexContainer>
  );
};
