import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  width: 100%;
  margin-left: ${(props) => props.marginLeft && 'auto'};
`;
