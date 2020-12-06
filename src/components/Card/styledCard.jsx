import styled, { css } from 'styled-components';
import { getV } from '../../styles';

const StyledCard = styled.div.attrs((props) => ({
  width: props.theme.dimensions.card[props.size].width,
  height: props.theme.dimensions.card[props.size].height,
}))`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: ${getV('16px', 'h')};
  width: ${(props) => getV(props.width, 'w')};
  height: ${(props) => getV(props.height, 'h')};

  grid-area: ${(props) => props.area || ''};

  ${(props) =>
    props.size === 'small' &&
    css`
      text-align: center;
    `}
`;

export { StyledCard };