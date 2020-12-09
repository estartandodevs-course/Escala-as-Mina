import * as C from '../';
import { getV } from '../../styles';

const Scout = (props) => {
  const { key, title, state, value } = props;

  return (
    <C.FlexContainer direction="column" justify="flex-start" align="flex-start">
      <C.Typography font="Raleway" weight="700" size={getV('16px', 'h')}>
        {title}
      </C.Typography>
      <C.FlexContainer justify="space-between">
        <div>
          <C.Button width="100px">Sim</C.Button>
          <C.Button width="100px">Não</C.Button>
        </div>
        <div>
          <C.Button type="icon">-</C.Button>
          <C.Typography>{value}</C.Typography>
          <C.Button type="icon">+</C.Button>
        </div>
      </C.FlexContainer>
    </C.FlexContainer>
  );
};
