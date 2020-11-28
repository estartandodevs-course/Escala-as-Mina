import styled from 'styled-components';

export const StyledCard = styled.div.attrs((props) => ({
  width: props.width || '327px',
  height: props.height || '231px',
}))`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 16px;
  margin: 50px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
