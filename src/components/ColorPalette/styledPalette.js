import styled from 'styled-components';

export const StyledPalette = styled.input`
  width: 90px;
  height: 48px;
  border: 0 none;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.pallete.gradient.main};
`;
