import styled from 'styled-components';

export const StyledCard = styled.div.attrs((props) => ({
  size: props.size,
}))`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 16px;
  margin: 50px;
  width: ${(props) => (props.size === 'large' ? '900px' : '327px')};
  height: ${(props) => (props.size === 'large' ? '652px' : '231px')};
`;
