import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  width: 100%;
  margin-left: ${(props) => props.marginLeft && "auto"};
`;

export const FlexContainer = styled.div`
  position: ${(props) => props.position};
  display: flex;
  justify-content: ${(props) => props.justify || "space-evenly"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};

  width: ${(props) => (props.width ? props.width : "100%")};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  height: ${(props) => (props.height ? props.height : "")};
  max-height: ${(props) => props.maxHeight};

  margin-left: ${(props) => props.marginLeft};
`;
