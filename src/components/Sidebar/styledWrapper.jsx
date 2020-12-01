import styled from "styled-components";

const Wrapper = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.styling.backgroundColor};
  width: ${(props) => props.styling.width};
  height: 100vh;
  border-radius: ${(props) => props.styling.borderRadius};
  ${(props) => props.styling.variation}: 0;
  color: white;
`;

export { Wrapper };
