import styled, { keyframes } from "styled-components";
import { getV } from "../../styles";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${getV("12px", "h")} ${getV("12px", "h")} ${getV("12px", "h")}
    ${getV("55px", "h")};
`;

const Animation = styled.div`
  animation-duration: ${(props) => props.duration};
  animation-timing-function: ease;
  animation-delay: ${(props) => props.delay};
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
`;

const FadeInAnimation = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;
const FadeOutAnimation = keyframes`
0% {
    opacity: 1;
}
100% {
    opacity: 0;
}

`;
const FadeIn = styled(Animation)`
  animation-name: ${FadeInAnimation};
`;
const FadeOut = styled(Animation)`
  animation-name: ${FadeOutAnimation};
`;

export { Div, FadeIn, FadeOut };
