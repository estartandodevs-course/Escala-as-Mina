import styled, { css } from 'styled-components';
import { getV } from '../../styles';

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  position: ${(props) => props.position && props.position};
  left: ${(props) => props.left && props.left};
  right: ${(props) => props.right && props.right};
  top: ${(props) => props.top && props.top};

  width: ${({ styling }) => styling.width && getV(styling.width, 'w')};
  height: ${({ styling }) => styling.height};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  &:focus {
    outline: none;
  }
`;

const RectangularButton = styled(BaseButton)`
  border-radius: 50px;

  ${(props) =>
    props.type === 'solid' //this ternary deals with solid/outlined types
      ? css`
          ${props.styling.variation === 'active'
            ? 'background-image'
            : 'background-color'}: ${props.styling.background};
          &:hover {
            ${props.styling.variation === 'active'
              ? 'background-image'
              : 'background-color'}: ${props.styling.hoverBackground};
          }
        `
      : css`
          background-color: transparent;
          border: 1px solid ${props.styling.background};
          &:hover {
            ${props.styling.variation === 'alert'
              ? 'background-image'
              : 'background-color'}: ${props.styling.hoverBackground};
            color: ${(props) => props.theme.pallete.gray.black};
          }
        `};
`;

const ScoutButton = styled(BaseButton)`
  border-radius: 50px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.pallete.gray.secondGray};
  margin-right: ${getV('15px', 'w')};
  ${(props) =>
    props.info === 'yes' &&
    props.state === true &&
    css`
      background-image: ${props.theme.pallete.gradient.main};
    `}
  ${(props) =>
    props.info === 'no' &&
    props.state === false &&
    css`background-color: ${props.theme.pallete.alert.main}; border: 1px solid white}`};
`;

const IconButton = styled(BaseButton)`
  border-radius: 50%;
  //I have to take this complexity out of here. styled component is for styling, logical stuff isn't supposed to be here

  ${(props) =>
    props.rounded === true
      ? css`
          ${props.styling.variation !== 'active'
            ? 'background-color'
            : 'background-image'}: ${props.styling.background};
        `
      : css`
          background-color: transparent;
        `}
`;
export { RectangularButton, IconButton, ScoutButton };
