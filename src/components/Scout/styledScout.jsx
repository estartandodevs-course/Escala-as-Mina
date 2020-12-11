import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  margin-left: ${(props) => props.marginLeft && 'auto'};
  width: ${(props) => props.width && '100%'};
`;
